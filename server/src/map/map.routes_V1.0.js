const mapControllers = require('./map.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

router.get('/', mapControllers.schedule)

module.exports = router