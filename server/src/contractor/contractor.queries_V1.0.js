/* 
    const {userQuery} = req.params;
    const onlyLettersPattern = /^[A-Za-z]+$/;

    if(!userQuery.match(onlyLettersPattern)){
      return res.status(400).json({ err: "No special characters and no numbers, please!"})
    }
*/

const selectContractorByEmailAndPassword = 'select * from personnes where email = $1 and mot_de_passe = $2 and id_role != 5'
// récupérer les données pour le formulaire
const roles = `select * from roles where id_role != 'id_role'`
const categories = 'select * from categories'
const activites = 'select * from activites '

const selectAllContractor = `
    SELECT DISTINCT personnes.id_personne, societes.id_societe, nom, prenom, nom_activite, 
        nom_societe, photo_marque
    FROM creneaux
    INNER JOIN personnes
        ON creneaux.id_personne = personnes.id_personne
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    ORDER BY personnes.id_personne`

const selectContractorById = `
    SELECT personnes.id_personne, societes.id_societe, nom, prenom, nom_activite, 
        nom_societe, photo_marque, infoPersonne, activites.id_activite, email
    FROM personnes
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    WHERE personnes.id_personne = $1`

const enableAService = 'insert into active (id_personne, id_service) values ($1, $2)'
const disableAService = 'delete from active where id_personne= $1 and id_service= $2'

const insertTimeSlot='insert into creneaux (id_personne, id_stand, creneau) values ($1,$2,$3)'

const findTimeSlot = 'select * from creneaux where creneau=$1 and id_stand=$2'

const updateContractor = `
    UPDATE personnes
    SET nom = $1, prenom = $2, email = $3, 
    infoPersonne = $4, id_activite = $5, id_societe = $6
    WHERE id_personne = $7
`

const selectContractorServices = `
    SELECT id_service FROM active 
    WHERE id_personne = $1
`

const showaffluenceParPersonne = 'select tranche_horaire, compteur  from affluence_sur_page where id_personne = $1'

const getTimeSlots = `
    SELECT * FROM creneaux
    INNER JOIN personnes ON personnes.id_personne = creneaux.id_personne
    INNER JOIN stands ON stands.id_stand = creneaux.id_stand
    WHERE personnes.id_personne = $1 AND EXTRACT(DAY FROM creneau) = $2
    AND EXTRACT(MONTH FROM creneau) = $3 AND EXTRACT(YEAR FROM creneau) = $4
`

module.exports = {selectContractorByEmailAndPassword, roles, 
    categories, activites, selectContractorById, selectAllContractor, 
    enableAService,disableAService,insertTimeSlot,findTimeSlot,
    updateContractor, selectContractorServices, showaffluenceParPersonne,
getTimeSlots}