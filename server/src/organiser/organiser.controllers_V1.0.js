const organiserQueries = require('./organiser.queries_V1.0.js')
const pool = require('../../db_V1.0.js')

function validerUnPrestataire(req,res){
    try {
        const id = req.params.id
        pool.query(organiserQueries.changePersonsRole,[id], (error, results)=>{
            if (error) throw error
            res.send({ data: 0, message: 'le prestataire n\'est plus en attente'})
    
        })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }   
}

function refuserUnePersonneEnAttente(req,res){

    try {
        const id = req.params.id
        pool.query(organiserQueries.deletePersonOnWL,[id], (error, results)=>{
            if (error) throw error
            res.send({ data: 0, message: 'le prestataire a été refusé'})
        })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }   
}
function listerLesPrestatairesEnAttente(req,res){
    pool.query(organiserQueries.getPersonOnWL, (error,results)=>{
        if(error) throw error
        if(results.rows == 0){
            res.send({ message: 'no contracton on wl'})
        }else{
            res.send(results.rows)
        }
    })
}


function listerLesPrestataires(req, res) {
    pool.query(organiserQueries.getPersons, (error, results)=>{
        if (error) throw error
        if(results.rows == 0){
            res.send('Il n\'y a aucun prestataire inscrit')
        }
        res.send(results.rows)
    })
}


module.exports = {validerUnPrestataire, refuserUnePersonneEnAttente, listerLesPrestataires, listerLesPrestatairesEnAttente}