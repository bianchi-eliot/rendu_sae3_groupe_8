const mapControllers = require('./map.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache')


router.get('/', mapControllers.schedule)

module.exports = router