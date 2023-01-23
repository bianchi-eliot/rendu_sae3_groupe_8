const organiserControllers = require("./organiser.controllers")
const express = require("express")
const router = express.Router()
/**
 * @swagger
 * /organiser/allContractors:
 *   get:
 *      description: Afficher tous les prestataires
 *      tags:
 *          - organisateur
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/allContractors', organiserControllers.listerLesPrestataires)

/**
 * @swagger
 * /organiser/listContractorsOnWL:
 *   get:
 *      description: Afficher tous les prestataires qui sont en attente de validation 
 *      tags:
 *          - organisateur
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/listContractorsOnWL", organiserControllers.listerLesPrestatairesEnAttente)

/**
 * @swagger
 * /organiser/validateContractorOnWL/{id}:
 *   get:
 *      description: L'organisateur valide un prestataire en attente
 *      tags:
 *          - organisateur
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/validateContractorOnWL/:id", organiserControllers.validerUnPrestataire)

router.delete("/deleteContractorOnWL/:id", organiserControllers.refuserUnePersonneEnAttente)

module.exports = router