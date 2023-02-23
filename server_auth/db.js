const Pool = require("pg").Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'expocar_api',
    password: 'ocu6tY5_*',
    port: '5432'
})

module.exports = pool