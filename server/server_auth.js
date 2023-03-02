require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    })
)
const { logIn, signIn } = require('./src/auth')

app.post('/log-in', logIn)

app.post('/sign-in', signIn)


const PORT = process.env.PORT_AUTH
app.listen({ port: PORT }, () => {
    console.log(`Listen on port ${PORT}`)
})