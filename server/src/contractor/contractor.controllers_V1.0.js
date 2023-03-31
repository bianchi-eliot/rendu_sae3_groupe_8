const contractorQueries = require('./contractor.queries_V1.0.js')
const servicesQueries = require('../services/services.queries_V1.0.js')
const pool = require('../../db_V1.0.js')
const escapeHtml = require('escape-html') // Prévention des attaques XSS

async function getContractor(req, res){
    try {
        const { userId } = req.user
        const results = await pool.query(contractorQueries.selectContractorById, [userId])
        
        //res.send({ data: 0, contractorInfo: results.rows[0] })
        const escapedResult = escapeHtml(JSON.stringify(results.rows[0])) // Prévention des attaques XSS
        res.send({ data: 0, contractorInfo: JSON.parse(escapedResult) })

    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getContractorForVisitor(req, res){
    try {
        const userId = req.params.id
        const results = await pool.query(contractorQueries.selectContractorById, [userId])
        
        //res.send({ data: 0, contractorInfo: results.rows[0] })
        const escapedResult = escapeHtml(JSON.stringify(results.rows[0])) // Prévention des attaques XSS
        res.send({ data: 0, contractorInfo: JSON.parse(escapedResult) })

    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllContractor(req, res) {
    try {
        const contractors = await pool.query(contractorQueries.selectAllContractor)
        
        //res.send(contractors.rows)
        const escapedResult = escapeHtml(JSON.stringify(contractors.rows)) // Prévention des attaques XSS
        res.send(JSON.parse(escapedResult))
    } catch(err) {
        console.log(err)
    }
} 

async function enableService(req, res) {
    try {
        const { userId } = req.user
        const idService = req.params.id
        await pool.query(contractorQueries.enableAService, [userId, idService])
        res.send({ data: 0, message: 'vous avez activé le service'})
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1, message: 'le service a deja ete active' })
    }
}

async function disableService(req, res) {
    try {
        const { userId } = req.user
        const idService = req.params.id
        await pool.query(contractorQueries.disableAService, [userId, idService])
        res.send({ data: 0, message: 'vous avez désactivé le service' })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function updateContractor(req, res) {
    try {
        const { userId } = req.user
        const { lastname, firstname, email, info, societes, activities } = req.body
        const tab = [lastname, firstname, email, info, activities, societes, userId]
        
        //await pool.query(contractorQueries.updateContractor, tab) 
        const escapedTab = tab.map(element => escapeHtml(element))  // Prévention des attaques XSS
        await pool.query(contractorQueries.updateContractor, escapedTab)

        res.send({ data: 0, message: 'prestataire mis à jour' })
    } catch(err) {
        console.log(err)
        res.send({ data: 1 })
    }
}

async function getAllActivatedServices(req, res) {
    try {
        const { userId } = req.user
        let servicesActivated = await pool.query(contractorQueries.selectContractorServices, 
            [userId])
        servicesActivated = servicesActivated.rows.map(service => service.id_service)

        const stars = await pool.query(servicesQueries.selectStartsByContractorId, [userId])
        
        res.send({ data: 0, servicesActivated, stars: stars.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllActivatedServicesForVisitor(req, res) {
    try {
        const  userId = req.params.id
        let servicesActivated = await pool.query(contractorQueries.selectContractorServices, 
            [userId])
        servicesActivated = servicesActivated.rows.map(service => service.id_service)

        const stars = await pool.query(servicesQueries.selectStartsByContractorId, [userId])
        
        res.send({ data: 0, servicesActivated, stars: stars.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function affluenceParPersonne(req,res){
    try {
        const { userId } = req.user
        const results = await pool.query(contractorQueries.showaffluenceParPersonne, [userId])
        if(results.rows == 0){res.send({data: 'vous n\'avez pas encore eu de visites'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}


async function getTimeSlots(req, res) {
    try {
        const { userId } = req.user
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const tab = [userId, day, month, year]
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
        const { userId } = req.user
        const { date, hour, standId } = req.body
        
        if (date == '' || hour ==  -1 || standId ==  -1) {
            res.status(400).send({ data: 3 })
        }


        const date2 = `${date} ${hour}`
        const results = await pool.query(contractorQueries.findTimeSlot, [date2, standId])
        if (results.rowCount !== 0) res.send({ data: 2, message: 'stand deja reserve' })
        else {
            await pool.query(contractorQueries.insertTimeSlot, [userId, standId, date2])
            res.send({ data: 0, message: 'stand reserve' })
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1})
    }
}


module.exports = { getContractor, getAllContractor, enableService, 
    disableService, updateContractor, getAllActivatedServices, affluenceParPersonne, getTimeSlots,
addTimeSlot, getContractorForVisitor, getAllActivatedServicesForVisitor}
