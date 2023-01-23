const Joi = require('joi')


const signUpSchema = Joi.object({
    nom: Joi.string().min(3).max(50),
    prenom: Joi.string().min(3).max(50),
    email: Joi.string().email().required(),
    mot_de_passe: Joi.string().min(8).max(20).required(),
    mot_de_passe_confirmation: Joi.ref("mot_de_passe")
})



function checkUserInputs(inputs) {
    return new Promise( (resolve, reject) => {
        const { error, value: user } = signUpSchema.validate(inputs, { abortEarly: false })
        
        if (error != undefined) reject(error.details)

        user.id = getMaxId()
        delete user.mot_de_passe_confirmation
        resolve({ user, message: 'User successfully added to the pending list' })
    })
}

function checkIfTimeSlotIsValid(request) {
    return new Promise( (resolve, reject) => {
        const idContractor = request.params.id
     Z
        const dateString = `April ${request.body.jour}, 2023 ${request.body.heure}:00:00`
        const date = new Date(dateString)
    
        // Vérifie que la date n'existe pas
        const dateInArray = timeSlots.find(timeSlot => {
            return timeSlot.fk_date === dateString && timeSlot.fk_stand_id_stand === parseInt(request.body.stand)
        })
        if (dateInArray != undefined) reject(`Ce stand est déjà réservé à ${dateString}`)
    
        // Vérifie que la personne n'a pas réservé plus de deux fois la même journée
        const numberStandBooked = timeSlots.reduce( (accumulator, timeSlot) => {
            if (timeSlot.fk_personne_id_personne === idContractor) {
                const dateSlot = new Date(timeSlot.fk_date)
                if(dateSlot.getDate() == date.getDate()) accumulator++
            }
            return accumulator
        }, 0)
    
        if (numberStandBooked >= 2) reject('Vous avez déjà reservé 2 fois pour ce jour')
    
        // Créer un nouveau time slot
        timeSlots.push({
            fk_personne_id_personne: idContractor,
            fk_stand_id_stand: parseInt(request.body.stand),
            fk_date: dateString
        })

        resolve("votre stand est reservé")
    })
}



module.exports = { checkUserInputs, checkIfTimeSlotIsValid }
