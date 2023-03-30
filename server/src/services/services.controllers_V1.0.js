const serviceQueries = require('./services.queries_V1.0.js')
const pool = require('../../db_V1.0.js')


async function addGuestBook(req, res) {
    try {
        const { userId: idVisitor } = req.user
        const now = new Date()
        const jour = now.getDate()
        const mois = now.getMonth()+1
        const annee = now.getFullYear()
        const signatureDate = `${jour}/${mois}/${annee}`

        const { idContractor, message } = req.body

        const verif = await pool.query(`SELECT id_visiteur FROM livre_dor WHERE id_visiteur = $1 AND id_prestataire = $2`
        , [idVisitor, idContractor])

        if (verif.rows.length === 0) {
            const tab = [idContractor, idVisitor, signatureDate, message]
            await pool.query(serviceQueries.insertGuestBook, tab)
            res.send({ data: 0, message: 'message ajouté' })
        } else {
            const tab = [message, signatureDate, idContractor, idVisitor]
            await pool.query(serviceQueries.updateGuestBook, tab)
            res.send({ data: 2, message: 'message mis a jour' })
        }

    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getGuestBook(req, res) {
    try {
        const { userId } = req.user
        const guestBook = await pool.query(serviceQueries.selectGuestBookByContractorId, [userId])
        res.send({ data: 0, guestBook: guestBook.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}


async function addStars(req, res) {
    try {
        const { userId: idVisitor } = req.user
        const { idContractor, stars } = req.body

        const verif = await pool.query(`SELECT id_visiteur FROM stars WHERE id_visiteur = $1 AND id_prestataire = $2`, [idVisitor, idContractor])

        if (verif.rows.length === 0) {
            const tab = [idContractor, idVisitor, stars]
            await pool.query(serviceQueries.insertStars, tab)
            res.send({ data: 0, message: 'étoiles ajoutées' })
        } else {
            const tab = [stars, idContractor, idVisitor]
            await pool.query(serviceQueries.updateStars, tab)
            res.send({ data: 2, message: 'étoiles mises à jour' })
        }

    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getStars(req, res) {
    try {
        const { userId } = req.user
        const grade = await pool.query(serviceQueries.selectStartsByContractorId, [userId])
        res.send({ data: 0, grade: grade.rows[0].grade })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
} 

async function getAllServices(req, res) {
    try {
        const services = await pool.query(serviceQueries.selectAllServices)
        res.send({ data: 0, services: services.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function addGraph(req, res) {
    try {
        const { tranche_horaire, id_personne } = req.body
        const verif = await pool.query('SELECT id_personne FROM affluence_sur_page WHERE tranche_horaire = $1 AND id_personne = $2',
        [tranche_horaire, id_personne])
        if (verif.rows.length === 0) {
            await pool.query(serviceQueries.insertGraph, [tranche_horaire, id_personne])
            res.send({ data: 0 })
        } else {
            await pool.query(serviceQueries.updateGraph, [id_personne, tranche_horaire])
            res.send({ data: 1 })
        }
    } catch(err) {
        console.log(`An error occured : ${err.message}`)
        res.send({ data: 2 })
    }
}

async function getAllContractorsInfluence(req, res) {
    try {
        const { userRole } = req.user
        if (userRole !== 'organiser') {
            return res.send({ data: 1, message: 'Vous n\'êtes pas un organisateur' })
        }
        const results = await pool.query('SELECT tranche_horaire, compteur FROM affluence_sur_page')
        if(results.rows == 0){return res.send({data: 'No data'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}

async function getContractorsVisit(req, res) {
    try {
        const { userRole } = req.user
        if (userRole !== 'organiser') {
            return res.send({ data: 1, message: 'Vous n\'êtes pas un organisateur' })
        }
        const results = await pool.query(`
            SELECT SUM(compteur), nom, prenom FROM affluence_sur_page
            INNER JOIN personnes ON personnes.id_personne = affluence_sur_page.id_personne
            GROUP BY personnes.id_personne
        `)
        if(results.rows == 0){return res.send({data: 'No data'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}

async function getContractorsGuestBooks(req, res) {
    try {
        const { userRole } = req.user
        if (userRole !== 'organiser') {
            return res.send({ data: 1, message: 'Vous n\'êtes pas un organisateur' })
        }
        const results = await pool.query(`
            SELECT COUNT(*), nom, prenom FROM livre_dor
            INNER JOIN personnes ON personnes.id_personne = livre_dor.id_prestataire
            GROUP BY personnes.id_personne
        `)
        if(results.rows == 0){return res.send({data: 'No data'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}

async function getContractorsStart(req, res) {
    try {
        const results = await pool.query(`
            SELECT AVG(valeur_note), nom, prenom FROM stars
            INNER JOIN personnes ON personnes.id_personne = stars.id_prestataire
            GROUP BY personnes.id_personne
        `)
        if(results.rows == 0){return res.send({data: 'No data'})}
        res.send({ data: results.rows })
    } catch(err){
        console.log(err.message)
        res.send({ data: 1})
    }
}

module.exports = {
    addGuestBook, getGuestBook,
    addStars, getStars, addGraph,
    getAllServices, getAllContractorsInfluence,
    getContractorsVisit, getContractorsGuestBooks,
    getContractorsStart
}