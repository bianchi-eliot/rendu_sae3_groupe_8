const getPiece = 'SELECT * FROM pieces WHERE id_piece = $1'
const getPanierFromId = 'SELECT * FROM rempli_panier WHERE id_personne = $1'

const getAllPieces = 'SELECT * FROM pieces'

const getAllTypes = 'SELECT * FROM type_pieces'
const getAllSocietes = 'SELECT * FROM societes'

const filter = `SELECT * FROM pieces
                WHERE id_type_piece = (SELECT id_type_piece FROM type_pieces WHERE nom_type_piece = $1)
                  AND id_societe = (SELECT id_societe FROM societes WHERE nom_societe = $2)
                  AND prix_piece >= $3 AND prix_piece <= $4`

const insertPiece = `INSERT INTO pieces(descriptif_piece, nom_piece, prix_piece, image_piece, quantite_piece, id_type_piece, id_societe)
                        VALUES ($1,$2,$3,$4,$5,$6,$7)`

const updatePiece = `UPDATE pieces SET descriptif_piece = $2 
                                         AND nom_piece = $3 
                                         AND prix_piece = $4 
                                         AND image_piece = $5 
                                         AND quantite_piece = $6 
                                         AND id_type_piece = $7 
                                         AND id_societe = $8
                        WHERE id_piece = $1`

const deletePiece = `DELETE FROM pieces WHERE id_piece = $1`

module.exports = {
    getPiece, getPanierFromId, filter,
    getAllTypes, getAllSocietes, getAllPieces,
    insertPiece, updatePiece, deletePiece
}