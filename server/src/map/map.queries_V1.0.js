const schedule = `
SELECT EXTRACT (HOUR FROM creneau) AS hour, personnes.id_personne, societes.id_societe, 
        nom, prenom, nom_activite, nom_societe, photo_marque, stands.id_stand
    FROM creneaux
    INNER JOIN personnes
        ON creneaux.id_personne = personnes.id_personne
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    INNER JOIN stands
        ON creneaux.id_stand = stands.id_stand

    WHERE EXTRACT (DAY FROM creneau) = $1 AND EXTRACT(MONTH FROM creneau) = $2 
        AND EXTRACT (HOUR FROM creneau) >= $3 AND EXTRACT (HOUR FROM creneau) < $4`

/*
INNER JOIN active
ON personnes.id_personne = active.id_personne
INNER JOIN services
ON active.id_service = services.id_service
*/

module.exports = {
    schedule
}