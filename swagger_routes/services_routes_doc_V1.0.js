/**
 * @swagger
 * /services/guest-book:
 *   post:
 *      description: Ajouter un commentaire au livre d'or d'un prestataire
 *      tags:
 *          - services
 *      parameters:
 *          - in: body
 *            name: livre d'or
 *            description: ajout livre d'or
 *            schema:
 *              type: object
 *              required:
 *                 - idContractor
 *                 - idVisitor
 *                 - signatureDate
 *                 - message
 *              properties:
 *                  idContractor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 3
 *                  idVisitor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 19
 *                  message:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: j'ai beaucoup aimé votre activité
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


/**
 * @swagger
 * /services/guest-book/{id}:
 *   get:
 *      description: Voir tous les commentaires du livre d'or d'un prestataire
 *      tags:
 *          - services
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


/**
 * @swagger
 * /services/stars:
 *   post:
 *      description: Ajouter une note à un prestataire
 *      tags:
 *          - services
 *      parameters:
 *          - in: body
 *            name: avis
 *            description: ajout d'une note
 *            schema:
 *              type: object
 *              required:
 *                 - idContractor
 *                 - idVisitor
 *                 - stars
 *              properties:
 *                  idContractor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 3
 *                  idVisitor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 15
 *                  stars:
 *                      type: integer
 *                      example: 2  
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
 * /services/stars/{id}:
 *   get:
 *      description: Voir la moyenne d'un prestataire
 *      tags:
 *          - services
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



/**
 * @swagger
 * /services/:
 *   get:
 *      description: Afficher tous les services
 *      tags:
 *          - services
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '400':
 *              description: Bad request
 *          '500':
 *              description: Internal server error
 */