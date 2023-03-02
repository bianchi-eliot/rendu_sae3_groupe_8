const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'cle_secrete', (err, payload) => {
        if (err) return res.sendStatus(403)
        req.user = payload
        next()
    })
}

module.exports = { auth }