const organiserControllers = require('./organiser.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache')


const { auth } = require('../../tools/auth.tools')

router.get('/allContractors', auth, organiserControllers.listerLesPrestataires)

router.get('/listContractorsOnWL', auth, organiserControllers.listerLesPrestatairesEnAttente)

router.get('/validateContractorOnWL/:id', auth, organiserControllers.validerUnPrestataire)

router.delete('/deleteContractorOnWL/:id', auth, organiserControllers.refuserUnePersonneEnAttente)

module.exports = router