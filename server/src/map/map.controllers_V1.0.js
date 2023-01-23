const { simplifyRequest } = require('../../tools/sql.tools_V1.0.js')
//const mapData = require('../../map_datas.json')
const mapQueries = require('./map.queries_V1.0.js')

//const persons = require("../../json/persons.json")
const pool = require('../../db_V1.0.js')


/*function listByBrand(req,res,next){
    res.send(brands)
    res.render('map/list_contractor', {
        brands: brands,
        path: '/map/list_contractor',
        navbarData      
    })
}
function listContractors(req,res){

    console.log("test")
    let tabContractor = []
    persons.forEach(person => {
        if(person.fk_role_id_role == 2){
            //console.log("c'est un prestataire")
            var idContractor = person.id_personne
            var nomContractor = person.nom
            var prenomContractor = person.prenom
            var emailContractor = person.email
            //console.log(idContractor, nomContractor, prenomContractor, emailContractor)
            
            tabContractor.push(
                {idContractor,
                nomContractor,
                prenomContractor,
                emailContractor})
            
        }
        else{
            console.log("ce n'est pas un prestataire ")
        }
    })
    res.send(tabContractor)
    //res.send(200)
}*/

async function schedule(req, res) {
    try {
        const date = new Date()
        const day = date.getDate().toString()
        const month = (date.getMonth() + 1).toString()
        const hour1 = date.getHours() % 2 === 0 ? date.getHours() : date.getHours() - 1
        const hour2 = hour1 + 2
        const dates = [day, month, hour1, hour2]
        let timeSlots = await pool.query(mapQueries.schedule, dates)
        timeSlots = simplifyRequest(timeSlots.rows, 'id_personne', 'libelle_service')
        res.status(200).send(timeSlots)
        //res.status(200).render('map/map.pug', { navbarData, mapData, timeSlots: timeSlotsSorted })
    }
    catch(e) {
        console.log(e)
        res.status(400).send('Err: ' + e.message)
    }
}


module.exports = { schedule }