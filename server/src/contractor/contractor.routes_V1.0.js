const contractorControllers = require('./contractor.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const { auth } = require('../../tools/auth.tools')

const cache = require('../../routeCache')


router.get('/time-slots', auth, contractorControllers.getTimeSlots)

router.get('/', contractorControllers.getAllContractor)

router.get('/single', auth, contractorControllers.getContractor)
router.get('/visitor/:id', contractorControllers.getContractorForVisitor)

router.put('/', auth, contractorControllers.updateContractor)

router.get('/activated-services', auth, contractorControllers.getAllActivatedServices)
router.get('/activated-services/visitor/:id', contractorControllers.getAllActivatedServicesForVisitor)

router.post('/active/:id', auth, contractorControllers.enableService)

router.delete('/active/:id', auth, contractorControllers.disableService)

router.get('/affluence', auth, contractorControllers.affluenceParPersonne)

router.post('/time-slot/', auth, contractorControllers.addTimeSlot)

module.exports = router