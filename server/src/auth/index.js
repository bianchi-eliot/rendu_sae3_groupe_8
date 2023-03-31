const pool = require('../../db_V1.0')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')  // bcrypt
const SqlString = require('sqlstring')  //prévention des attaques SQL injection



const LOG_IN = SqlString.format(`
    SELECT * from personnes 
    WHERE email = $1 AND id_role != 5`)

const FIND_BY_EMAIL = SqlString.format(`
    SELECT id_personne
    FROM personnes 
    WHERE email = $1`)

const SIGN_IN = SqlString.format(`
    INSERT INTO personnes (nom, prenom, email, infoPersonne, mot_de_passe, id_activite, id_role, id_societe) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`)

async function logIn(req, res) {
  try {
      let { email, password } = req.body
      const results = await pool.query(LOG_IN, [email])
      const match = await bcrypt.compare(password, results.rows[0].mot_de_passe)    // bcrypt
      console.log(results.rows)
      
      let passwordIsOk = ((match) || (password == results.rows[0].mot_de_passe) ? true : false)
      
      if ((results.rows[0].email != email) || (!passwordIsOk)){
        res.send({ data: 2, message: 'Wrong username/password' })
      }
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
      let { lastName, firstName, email, info, password, idActivity, idRole, idSociety } = req.body
      let tab = null
      const hashedPassword = bcrypt.hashSync(password, 10)  // bcrypt
      password = hashedPassword
      console.log(password)
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