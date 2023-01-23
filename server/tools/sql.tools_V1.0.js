/**
 * Simplifie le tableau retourné par une requête SQL lorsqu'il contient des doublons
 * @param array Un tableau contenant des champs doublons
 * @param fieldGroupBy Le champ qui groupe tous les autres champs
 * @param fieldsToArray Tous les champs n'étant pas des doublons (autant que souhaités)
 * @returns Un nouveau tableau dont les champs doublons ont été supprimés
 * ex: const array = simplifyRequest(results.rows, 'id_personne', 'libelle_service', 'id_libelle')
 */
function simplifyRequest(array, fieldGroupBy, ...fieldsToArray) {
    return array.reduce( (previous, next) => {
        const index = previous.findIndex(element => element[fieldGroupBy] === next[fieldGroupBy])
        if (index === -1) {
            const element = {}
            for (const property in next) {
                if ( fieldsToArray.includes(property) ) element[property] = [next[property]]
                else element[property] = next[property]
            }
            previous.push(element)
        }
        else {
            for (const property in next) {
                if ( fieldsToArray.includes(property) ) previous[index][property].push(next[property])
            }
        }
        return previous
    }, [])
}

module.exports = {
    simplifyRequest
}