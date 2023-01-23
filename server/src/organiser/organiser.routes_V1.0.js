const organiserControllers = require('./organiser.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

router.get('/allContractors', organiserControllers.listerLesPrestataires)

router.get('/listContractorsOnWL', organiserControllers.listerLesPrestatairesEnAttente)

router.get('/validateContractorOnWL/:id', organiserControllers.validerUnPrestataire)

router.delete('/deleteContractorOnWL/:id', organiserControllers.refuserUnePersonneEnAttente)

module.exports = router