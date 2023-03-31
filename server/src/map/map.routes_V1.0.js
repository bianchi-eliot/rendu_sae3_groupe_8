const mapControllers = require('./map.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache')   // Mise en cache


router.get('/',cache(200), mapControllers.schedule)    // Mise en cache

module.exports = router