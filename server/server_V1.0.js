const rootRoutes = require('./src/root/root.routes.js')
const mapRoutes = require('./src/map/map.routes.js')
const contractorRoutes = require('./src/contractor/contractor.routes.js')
const shopRoutes = require('./src/shop/shop.routes.js')
const organiserRoutes = require('./src/organiser/organiser.routes.js')
// const brandRoutes = require('./src/brand/brand.routes.js')
const servicesRoutes = require('./src/services/services.routes.js')

// const visitorsRoutes = require('./src/visitors/visitors.routes.js')

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
            './src/brand/brand.routes.js', 
            './src/contractor/contractor.routes.js',
            './src/map/map.routes.js',
            './src/services/services.routes.js',
            './src/organiser/organiser.routes.js',
            './src/root/root.routes.js',
            './src/shop/shop.routes.js'
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