const rootControllers = require('./root.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache')

router.get('/', rootControllers.getHome)

// router.get('/login-signup', rootControllers.getLogInSignUp)
  
router.get('/planning', rootControllers.getPlanning)

router.get('/all-societes', rootControllers.getAllSocietes)
router.get('/all-activities', rootControllers.getAllActivities)
router.get('/all-roles', rootControllers.getAllRoles)
router.get('/sign-in-roles', rootControllers.getSignInRoles)

router.get('/stands', rootControllers.getAllStands)

module.exports = router