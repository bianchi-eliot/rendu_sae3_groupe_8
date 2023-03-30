const Pool = require("pg").Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'salon_auto',
    password: '0101',
    port: '5432'
})

module.exports = pool