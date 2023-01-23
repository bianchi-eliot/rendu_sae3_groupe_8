/**
 * @swagger
 * /contractors/log-in:
 *   post:
 *      description: Permet de se connecter à un compte existant
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: body
 *            name: log-in
 *            description: permet de se connecter à un compte
 *            schema:
 *              type: object
 *              required:
 *                 - email
 *                 - password
 *              properties:
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: heather@gmail.com 
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 123456
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
 * /contractors/sign-in:
 *   post:
 *      description: Permet de se créer un compte
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: body
 *            name: log-in
 *            description: permet de se connecter à un compte
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - email
 *                 - info
 *                 - password
 *                 - idRole
 *                 - idSociety
 *                 - idActivity
 *              properties:
 *                  firstname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Tom
 *                  lastname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Mirage
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: miragetom@gmail.com 
 *                  info:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Lorem ipsum dolore...
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 123456
 *                  idRole:
 *                      type: integer
 *                      example: 2
 *                  idSociety:
 *                      type: integer
 *                      example: 6
 *                  idActivity:
 *                      type: integer
 *                      example: 3
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
 * /contractors/:
 *   get:
 *      description: Afficher tous les prestataires 
 *      tags:
 *          - prestataire
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
 * /contractors/{id}:
 *   get:
 *      description: Afficher un prestataire avec un id précis
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
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
 * /contractors/{id}:
 *   put:
 *      description: Met à jour un prestataire avec un id précis
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
 *            type: integer
 *          - in: body
 *            name: met a jour
 *            description: met a jour le prestataire
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - email
 *                 - info
 *              properties:
 *                  firstname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Bob
 *                  lastname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Marcher
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: bobmarcher@gmail.com 
 *                  info:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Exemple de description
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
 * /contractors/activated-services/{id}:
 *   get:
 *      description: Affiche les services qu'un prestataire a activé et sa moyenne globale
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
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
 * /contractors/active/{id}:
 *   post:
 *      description: Le prestataire peut activer un service
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
 *            type: integer
 *          - in: body
 *            name: active
 *            description: informations sur le service que le prestataire veut activer
 *            schema:
 *              type: object
 *              required:
 *                 - idContractor
 *              properties:
 *                  idContractor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 14
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
 * /contractors/active/{id}:
 *   delete:
 *      description: Le prestataire peut désactiver un service
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
 *            type: integer
 *          - in: body
 *            name: active
 *            description: informations sur le service que le prestataire veut désactiver
 *            schema:
 *              type: object
 *              required:
 *                 - idContractor
 *              properties:
 *                  idContractor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 14
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
 * /contractors/affluence/{id}:
 *   get:
 *      description: Afficher le nombre de visite sur la page d'un prestataire par heure
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
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
 * /contractors/time-slot/{id}:
 *   post:
 *      description: Le prestataire peut réserver un créneau pour l'activité qu'il propose
 *      tags:
 *          - prestataire
 *      parameters:
 *          - in: path
 *            name: id
 *            default: 3
 *            type: integer
 *          - in: body
 *            name: créneau
 *            description: informations pour la réservation du créneau
 *            schema:
 *              type: object
 *              required:
 *                 - date
 *                 - hour
 *                 - standId
 *              properties:
 *                  date:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: '2023-12-13'
 *                  hour:
 *                      type: string
 *                      example: '18:00:00'
 *                  standId:
 *                      type: integer
 *                      example: 5
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '400':
 *              description: Bad request
 *          '500':
 *              description: Internal server error
 */