const contractorQueries = require('./contractor.queries_V1.0.js')
const servicesQueries = require('../services/services.queries_V1.0.js')
const pool = require('../../db_V1.0.js')


async function signIn(req, res) {
    try {
        const { lastName, firstName, email, info, password, idActivity, idRole, idSociety } = req.body
        let tab = null
        if (parseInt(idRole) === 2) {
            tab = [lastName, firstName, email, info, password, idActivity, 5, idSociety]
        } else if (parseInt(idRole) === 4) {
            tab = [lastName, firstName, email, info, password, null, idRole, null]
        }

        const results = await pool.query(contractorQueries.verifyEmail, [email])
        if (results.rowCount === 1) res.send({ data: 2, message: 'email deja existant' })
        else {
            await pool.query(contractorQueries.insertPerson, tab)
            if (parseInt(idRole) === 2) { 
                res.send({ data: 0, message: 'prestataire mis en attente' })   
            } else if (parseInt(idRole) === 4) {
                const results = await pool.query(contractorQueries.verifyEmail, [email])
                res.send({ data: 3, id: results.rows[0].id_personne, message: 'client crée' })
            }
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getContractor(req, res){
    try {
        const id = req.params.id || 2
        const results = await pool.query(contractorQueries.selectContractorById, [id])
        res.send({ data: 0, contractorInfo: results.rows[0] })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllContractor(req, res) {
    try {
        const contractors = await pool.query(contractorQueries.selectAllContractor)
        res.send(contractors.rows)
    } catch(err) {
        console.log(err)
    }
} 

async function enableService(req, res) {
    try {
        const idContractor = req.body.idContractor
        const idService = req.params.id
        await pool.query(contractorQueries.enableAService, [idContractor, idService])
        res.send({ data: 0, message: 'vous avez activé le service'})
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1, message: 'le service a deja ete active' })
    }
}

async function disableService(req, res) {
    try {
        const idContractor = req.body.idContractor
        const idService = req.params.id
        await pool.query(contractorQueries.disableAService, [idContractor, idService])
        res.send({ data: 0, message: 'vous avez désactivé le service' })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function updateContractor(req, res) {
    try {
        const personneId = req.params.id
        const { lastname, firstname, email, info, societes, activities } = req.body
        const tab = [lastname, firstname, email, info, activities, societes, personneId]
        await pool.query(contractorQueries.updateContractor, tab)
        res.send({ data: 0, message: 'prestataire mis à jour' })
    } catch(err) {
        console.log(err)
        res.send({ data: 1 })
    }
}

async function getAllActivatedServices(req, res) {
    try {
        const contractorId = req.params.id
        let servicesActivated = await pool.query(contractorQueries.selectContractorServices, 
            [contractorId])
        servicesActivated = servicesActivated.rows.map(service => service.id_service)

        const stars = await pool.query(servicesQueries.selectStartsByContractorId, [contractorId])
        
        res.send({ data: 0, servicesActivated, stars: stars.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function affluenceParPersonne(req,res){
    try {
        const idContractor = req.params.id
        const results = await pool.query(contractorQueries.showaffluenceParPersonne, [idContractor])
        if(results.rows == 0){res.send({data: 'vous n\'avez pas encore eu de visites'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}


async function getTimeSlots(req, res) {
    try {
        const id = req.params.id
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const tab = [id, day, month, year]
        const timeSlots = await pool.query(contractorQueries.getTimeSlots, tab)
        timeSlots.rows.forEach(timeSlot => {
            const creneau = new Date(timeSlot.creneau)
            timeSlot.creneau = `${creneau.getHours()}h -- ${creneau.getHours() + 2}h`
        })
        res.status(200).send({ timeSlots: timeSlots.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1})
    }
}


async function addTimeSlot(req, res) {
    try {
        const id = req.params.id
        const { date, hour, standId } = req.body
        
        if (date == '' || hour ==  -1 || standId ==  -1) {
            res.status(400).send({ data: 3 })
        }


        const date2 = `${date} ${hour}`
        const results = await pool.query(contractorQueries.findTimeSlot, [date2, standId])
        if (results.rowCount !== 0) res.send({ data: 2, message: 'stand deja reserve' })
        else {
            await pool.query(contractorQueries.insertTimeSlot, [id, standId, date2])
            res.send({ data: 0, message: 'stand reserve' })
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1})
    }
}


module.exports = { signIn, getContractor, getAllContractor, enableService, 
    disableService, updateContractor, getAllActivatedServices, affluenceParPersonne, getTimeSlots,
addTimeSlot }
