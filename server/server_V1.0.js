const rootRoutes = require('./src/root/root.routes_V1.0.js')
const mapRoutes = require('./src/map/map.routes_V1.0.js')
const contractorRoutes = require('./src/contractor/contractor.routes_V1.0.js')
const shopRoutes = require('./src/shop/shop.routes_V1.0.js')
const organiserRoutes = require('./src/organiser/organiser.routes_V1.0.js')
const servicesRoutes = require('./src/services/services.routes_V1.0.js')

require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
const helmet = require('helmet')

const swaggerOption = {
    swaggerDefinition: (swaggerJsDoc.Options = {
        info: {
            title: 'RESTFul API of Expocar',
            description: 'API documentation',
            contact: {
                name: 'MBIZI KOUENDELA - KORBI - SAK - DAVID - BIANCHI',
            },
            servers: [`http://localhost:${PORT}/`],
        },
    }),
    apis: [
        'server.js', 
        '../swagger_routes/prestataires_routes_doc_V1.0.js',
        '../swagger_routes/map_routes_doc_V1.0.js',
        '../swagger_routes/organisateurs_routes_doc_V1.0.js',
        '../swagger_routes/services_routes_doc_V1.0.js',
    ]
}
const swaggerDocs = swaggerJsDoc(swaggerOption)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    })
)
app.use(helmet())
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/', rootRoutes)
app.use('/map', mapRoutes)
app.use('/contractors', contractorRoutes)
app.use('/shop', shopRoutes)
app.use('/organiser', organiserRoutes)
app.use('/services', servicesRoutes)

app.listen(PORT, console.log(`Listen on localhost:${PORT}`))