const Pool = require("pg").Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'expocar',
    password: '2003',
    port: '5432'
})

module.exports = pool