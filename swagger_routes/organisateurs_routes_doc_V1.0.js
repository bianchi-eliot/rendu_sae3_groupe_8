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
 *          '400':
 *              description: Bad request
 *          '500':
 *              description: Internal server error
 */


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
 *          '400':
 *              description: Bad request
 *          '500':
 *              description: Internal server error
 */


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
 *            default: 2
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '400':
 *              description: Bad request
 *          '500':
 *              description: Internal server error
 */