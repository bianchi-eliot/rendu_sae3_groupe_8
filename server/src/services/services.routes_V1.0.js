const servicesControllers = require('./services.controllers_V1.0.js')
const express = require('express')
const router = express.Router()
const cache = require('../../routeCache')

const { auth } = require('../../tools/auth.tools')

router.get('/contractors-influence', auth, servicesControllers.getAllContractorsInfluence)

router.get('/visit-contractors', auth, servicesControllers.getContractorsVisit)

router.get('/guest-book-contractors', auth, servicesControllers.getContractorsGuestBooks)

router.get('/start-contractors', servicesControllers.getContractorsStart)



router.post('/guest-book', auth, servicesControllers.addGuestBook)

router.get('/guest-book', auth, servicesControllers.getGuestBook)

router.post('/stars', auth, servicesControllers.addStars)

router.get('/stars', auth, servicesControllers.getStars)

router.get('/', servicesControllers.getAllServices)

router.post('/add-graph', servicesControllers.addGraph)

module.exports = router