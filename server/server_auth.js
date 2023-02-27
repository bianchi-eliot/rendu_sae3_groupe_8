require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const pool = require('../server_auth/db')


app.post('/log-in', async (req,res) => {
    try {
        const { email, password } = req.body
        const results = await pool.query('select * from personnes where email = $1 and mot_de_passe = $2 and id_role != 5', [email, password])
        if (results.rowCount === 0) res.send({ data: 2 })
        else {
            let userRole = 'client'
            if (results.rows[0].id_role === 1) userRole = 'organiser'
            else if (results.rows[0].id_role === 2) userRole = 'contractor'
            const token = jwt.sign({ 
                userId: results.rows[0].id_personne,
                userRole 
            }, 'cle_secrete', { expiresIn: '1h' })
            res.send({ data: 0, token, userRole })
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
})


const PORT = process.env.PORT_AUTH
app.listen({ port: PORT }, () => {
    console.log(`Listen on port ${PORT}`)
})