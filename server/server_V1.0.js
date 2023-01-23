const rootRoutes = require('./src/root/root.routes_V1.0.js')
const mapRoutes = require('./src/map/map.routes_V1.0.js')
const contractorRoutes = require('./src/contractor/contractor.routes_V1.0.js')
const shopRoutes = require('./src/shop/shop.routes_V1.0.js')
const organiserRoutes = require('./src/organiser/organiser.routes_V1.0.js')
const servicesRoutes = require('./src/services/services.routes_V1.0.js')

// const visitorsRoutes = require('./src/visitors/visitors.routes_V1.0.js')

require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

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
const swaggerDocs = swaggerJsDoc(swaggerOption);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/', rootRoutes)
app.use('/map', mapRoutes)
app.use('/contractors', contractorRoutes)
app.use('/shop', shopRoutes)
app.use('/organiser', organiserRoutes)
// app.use('/brands', brandRoutes)
app.use('/services', servicesRoutes)
// app.use('/visitors', visitorsRoutes)

app.listen(PORT, console.log(`Listen on localhost:${PORT}`))