const contractorControllers = require('./contractor.controllers_V1.0.js')
require('dotenv').config()
const express = require('express')
const router = express.Router()

router.post('/log-in', contractorControllers.logIn)

router.post('/sign-in', contractorControllers.signIn)

router.get('/time-slots/:id', contractorControllers.getTimeSlots)

router.get('/', contractorControllers.getAllContractor)

router.get('/:id', contractorControllers.getContractor)

router.put('/:id', contractorControllers.updateContractor)

router.get('/activated-services/:id', contractorControllers.getAllActivatedServices)

router.post('/active/:id', contractorControllers.enableService)

router.delete('/active/:id', contractorControllers.disableService)

router.get('/affluence/:id', contractorControllers.affluenceParPersonne)

router.post('/time-slot/:id', contractorControllers.addTimeSlot)

module.exports = router