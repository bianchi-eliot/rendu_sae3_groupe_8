const pool = require('../../db_V1.0')
const jwt = require('jsonwebtoken')


const LOG_IN = `
    SELECT * from personnes 
    WHERE email = $1 AND mot_de_passe = $2 AND id_role != 5`

const FIND_BY_EMAIL = `
    SELECT id_personne
    FROM personnes 
    WHERE email = $1`

const SIGN_IN = `
    INSERT INTO personnes (nom, prenom, email, infoPersonne, mot_de_passe, id_activite, id_role, id_societe) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`

async function logIn(req, res) {
  try {
      const { email, password } = req.body
      const results = await pool.query(LOG_IN, [email, password])
      console.log(results.rows)
      if (results.rowCount === 0) res.send({ data: 2, message: 'Wrong username/password' })
      else {
          let userRole = 'client'
          if (results.rows[0].id_role === 1) userRole = 'organiser'
          else if (results.rows[0].id_role === 2) userRole = 'contractor'
          const token = jwt.sign({ 
              userId: results.rows[0].id_personne,
              userRole 
          }, 'cle_secrete', { expiresIn: '1h' })
          res.send({ 
            data: 0, 
            token, 
            userRole, 
            name: `${results.rows[0].nom} ${results.rows[0].prenom}`
        })
      }
  } catch(err) {
      console.log(err.message)
      res.send({ data: 1 })
  }
}

async function signIn(req, res) {
  try {
      const { lastName, firstName, email, info, password, idActivity, idRole, idSociety } = req.body
      let tab = null
      if (parseInt(idRole) === 2) {
          tab = [lastName, firstName, email, info, password, idActivity, 5, idSociety]
      } else if (parseInt(idRole) === 4) {
          tab = [lastName, firstName, email, info, password, null, idRole, null]
      }

      if (!lastName || !firstName || !email || !password || !idRole) {
        return res.send({ data: 5, message: 'Fields missing' })
      }

      const results = await pool.query(FIND_BY_EMAIL, [email])
      if (results.rowCount === 1) res.send({ data: 2, message: 'email already exists' })
      else {
          await pool.query(SIGN_IN, tab)
          if (parseInt(idRole) === 2) { 
              res.send({ data: 0, message: 'prestataire mis en attente' })   
          } else if (parseInt(idRole) === 4) {
              const results = await pool.query(FIND_BY_EMAIL, [email])
              const token = jwt.sign({ 
                userId: results.rows[0].id_personne,
                userRole: 'client'
              }, 'cle_secrete', { expiresIn: '1h' })
              res.send({ 
                data: 3, 
                message: 'client crée',
                token,
                name: `${lastName} ${firstName}`
            })
          }
      }
  } catch(err) {
      console.log(err.message)
      res.send({ data: 1 })
  }
}

module.exports = { logIn, signIn }