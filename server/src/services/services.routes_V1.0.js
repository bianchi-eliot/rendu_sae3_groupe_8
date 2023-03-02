const servicesControllers = require('./services.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const { auth } = require('../../tools/auth.tools')

router.post('/guest-book', auth, servicesControllers.addGuestBook)

router.get('/guest-book', auth, servicesControllers.getGuestBook)

router.post('/stars', auth, servicesControllers.addStars)

router.get('/stars', auth, servicesControllers.getStars)

router.get('/', servicesControllers.getAllServices)

router.post('/add-graph', servicesControllers.addGraph)

module.exports = router