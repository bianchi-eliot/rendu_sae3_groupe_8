const { simplifyRequest } = require('../../tools/sql.tools_V1.0.js')
 
const rootQueries = require('./root.queries_V1.0.js')
const pool = require('../../db_V1.0.js')

async function getHome(req, res) {
    const brands = await pool.query(rootQueries.selectAllSocietes)
    res.send(brands.rows)
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December']
async function getPlanning(req, res) {
    try {
        let { day: todayDay, month: todayMonth, monthName: todayMonthName, year: todayYear } = req.query
        if (todayDay == 'undefined' || todayDay == undefined) todayDay = new Date().getDate()
        if (todayMonth == 'undefined' || todayMonth == undefined) todayMonth = new Date().getMonth()
        if (todayMonthName == 'undefined' || todayMonthName == undefined) todayMonthName = monthNames[todayMonth]
        if (todayYear == 'undefined' || todayYear == undefined) todayYear = new Date().getFullYear()
        
        const today = new Date(`${todayMonthName} ${todayDay}, ${todayYear}`)
        const todayDate = { 
            todayDay, 
            //todayDay: '14',
            todayMonth:parseInt(todayMonth)+1, 
            // todayMonth: '01',
            todayMonthName, 
            todayYear 
        }
        const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))
        const yesterdayDate = {
            yesterdayDay: yesterday.getDate(),
            yesterdayMonth: yesterday.getMonth(),
            yesterdayYear: yesterday.getFullYear()
        }


        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
        const tomorrowDate = {
            tomorrowDay: tomorrow.getDate(),
            tomorrowMonth: tomorrow.getMonth(),
            tomorrowYear: tomorrow.getFullYear()
        }

        const timeSlots = await pool.query(rootQueries.planning, 
            [todayDate.todayDay, todayDate.todayMonth])
        const timeSlotsSorted = simplifyRequest(timeSlots.rows, 'id_stand', 'hour', 'id_personne', 'id_societe', 'nom', 'prenom', 'nom_activite', 'nom_societe', 'photo_marque')
        timeSlotsSorted.sort(sortTimeSlot)
        console.log(timeSlotsSorted)
        res.status(200).send({ timeSlots: timeSlotsSorted, todayDate, yesterdayDate, tomorrowDate })
    } catch(e) {
        console.log(e.err)
        res.status(400).send(e)
    }
}


async function getAllSocietes(req, res) {
    try {
        const societes = await pool.query(rootQueries.selectAllSocietes)
        res.send({ data: 0, societes: societes.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllActivities(req, res) {
    try {
        const activities = await pool.query(rootQueries.selectAllActivities)
        res.send({ data: 0, activities: activities.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllRoles(req, res) {
    try {
        const roles = await pool.query(rootQueries.selectAllRoles)
        res.send({ data: 0, roles: roles.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getSignInRoles(req, res) {
    try {
        const roles = await pool.query(rootQueries.selectFormSignInRoles)
        res.send({ data: 0, roles: roles.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    } 
}

function sortTimeSlot(a, b) {
    if (a.numero_stand < b.numero_stand) return -1
    if (a.numero_stand < b.numero_stand) return 1
    return 0
}

async function getAllStands(req, res) {
    try {
        const stands = await pool.query(rootQueries.selectAllStands)
        res.send({ data: 0, stands: stands.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    } 
}

module.exports = {
    getHome, getPlanning, 
    getSignInRoles, getAllSocietes, getAllActivities, getAllRoles, getAllStands
}

