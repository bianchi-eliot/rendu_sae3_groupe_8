
const express = require('express')
const router = express.Router()
const mapControllers = require("./map.controllers_V1.0.js")

/**
 * @swagger
 * /map/:
 *   get:
 *      description: Affiche les prestataires qui font leur prestation au moment où la page est consultée
 *      tags:
 *          - carte interactive
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/', mapControllers.schedule)


//router.get('/listContractors',mapControllers.listContractors)

//router.get('/list_contractor', mapControllers.listByBrand)

module.exports = router