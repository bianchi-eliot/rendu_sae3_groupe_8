require('dotenv').config()
const Pool = require("pg").Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'nom_BDD',
    password: 'mdp',
    port: '5432'
})

module.exports = pool