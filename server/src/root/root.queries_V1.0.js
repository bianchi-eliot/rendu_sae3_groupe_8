const planning = `
    SELECT EXTRACT (HOUR FROM creneau) AS hour, personnes.id_personne, nom, prenom, 
        nom_activite, nom_societe, photo_marque, stands.id_stand, numero_stand
    FROM creneaux
    INNER JOIN personnes
        ON creneaux.id_personne = personnes.id_personne
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    INNER JOIN stands
        ON creneaux.id_stand = stands.id_stand
    WHERE EXTRACT (DAY FROM creneau) = $1 AND EXTRACT(MONTH FROM creneau) = $2`

const selectAllSocietes = `SELECT id_societe, nom_societe, photo_marque FROM societes`
const selectAllActivities = `SELECT id_activite, nom_activite FROM activites`
const selectAllRoles = `SELECT id_role, libelle_role FROM roles`

const selectFormSignInRoles = `
    SELECT id_role, libelle_role 
    FROM roles
    WHERE libelle_role <> 'organisateur' AND libelle_role <> 'prestataire_en_attente'`

const selectAllStands = `
    SELECT * FROM stands
`

module.exports = {
    selectAllSocietes,
    selectAllActivities,
    selectAllRoles,
    selectFormSignInRoles,
    planning, selectAllStands
}