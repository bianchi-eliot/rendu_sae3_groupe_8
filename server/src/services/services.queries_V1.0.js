const insertGuestBook = `
    INSERT INTO livre_dor (id_prestataire, id_visiteur, date_signature, message_visiteur) 
    VALUES ($1, $2, $3, $4)
`

const updateGuestBook = `
    UPDATE livre_dor SET message_visiteur = $1, date_signature = $2 WHERE id_prestataire = $3 AND id_visiteur = $4
`

const selectGuestBookByContractorId = `
    SELECT livre_dor.id_visiteur, date_signature, message_visiteur, prenom, nom
    FROM livre_dor
    INNER JOIN personnes 
    ON livre_dor.id_visiteur = personnes.id_personne
    WHERE livre_dor.id_prestataire = $1
`


const insertStars = `
    INSERT INTO stars (id_prestataire, id_visiteur, valeur_note) 
    VALUES ($1, $2, $3)
`
const updateStars = `
    UPDATE stars SET valeur_note = $1 WHERE id_prestataire = $2 AND id_visiteur = $3
`

const selectStartsByContractorId = `
    SELECT AVG(valeur_note) AS grade
    FROM stars
    WHERE id_prestataire = $1
`


const selectAllServices = `SELECT id_service, libelle_service FROM services` 


const insertGraph = `
    INSERT into affluence_sur_page(tranche_horaire, compteur, id_personne)
    VALUES ($1, 1, $2) 
`

const updateGraph = `
    UPDATE affluence_sur_page SET compteur = compteur + 1
    WHERE id_personne = $1 AND tranche_horaire = $2
`


module.exports = {
    insertGuestBook, selectGuestBookByContractorId, updateGuestBook,
    insertStars, selectStartsByContractorId, updateStars,
    insertGraph, updateGraph,
    selectAllServices
}