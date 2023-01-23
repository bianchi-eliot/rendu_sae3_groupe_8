const servicesControllers = require('./services.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

router.post('/guest-book', servicesControllers.addGuestBook)

router.get('/guest-book/:id', servicesControllers.getGuestBook)

router.post('/stars', servicesControllers.addStars)

router.get('/stars/:id', servicesControllers.getStars)

router.get('/', servicesControllers.getAllServices)

router.post('/add-graph', servicesControllers.addGraph)

module.exports = router