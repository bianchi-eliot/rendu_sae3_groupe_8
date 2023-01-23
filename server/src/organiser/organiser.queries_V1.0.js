const getPersons = 'select * from personnes inner join roles on roles.id_role = personnes.id_role where personnes.id_role = 2'

const getPersonOnWL = 'select * from personnes inner join roles on roles.id_role = personnes.id_role where personnes.id_role = 5'

const deletePersonOnWL = 'delete from personnes where id_personne = $1'

const validatePersonOnWL = 'update from personnes where id_personne = $1 set id_role =5'

const changePersonsRole = 'update personnes set id_role=2 where id_personne=$1 and  id_role = 5'

module.exports = {getPersons, getPersonOnWL, deletePersonOnWL,validatePersonOnWL, changePersonsRole}