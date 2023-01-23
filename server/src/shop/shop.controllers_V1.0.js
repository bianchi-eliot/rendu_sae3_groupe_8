const shopQueries = require('./shop.queries_V1.0.js')
const pool = require('../../db_V1.0.js')

exports.list = (req,res) => {
    pool.query(shopQueries.getAllPieces, (error, results) => {
        if (error) throw error
        let pmax = 0
        results.rows.forEach((p) => {
            if(parseFloat(p.prix_piece) > pmax) pmax = parseFloat(p.prix_piece)
        })
        return res.status(200).send({success: 1, data: {pieces: results.rows, pmax}})
    })
}

exports.allSocietes = (req,res) => {
    pool.query(shopQueries.getAllSocietes, (error, results) => {
        if (error) throw error
        return res.status(200).send({success: 1, data: results.rows})
    })
}

exports.allTypesPieces = (req, res) => {
    pool.query(shopQueries.getAllTypes, (error, results) => {
        if (error) throw error
        return res.status(200).send({success: 1, data: results.rows})
    })
}

exports.add = (req, res) => {
    console.log(req.body)
    pool.query(shopQueries.insertPiece, req.body, (error, results) => {
        if (error) throw error
        else console.log('Piece added successfully !')
    })
    return res.redirect('/shop')
}

exports.update = (req, res) => {
    console.log(req.body)
    pool.query(shopQueries.updatePiece, req.body, (error, results) => {
        if (error) throw error
        else console.log('Piece updated successfully !')
    })
    return res.redirect('/shop')
}

exports.delete = (req, res) => {
    pool.query(shopQueries.deletePiece, [req.body.id_piece], (error, results) => {
        if (error) throw error
        else console.log('Piece deleted successfully !')
    })
    return res.redirect('/shop')
}

exports.showOne = (req,res) => {
    pool.query(shopQueries.getPiece, [req.params.id], (error, results) => {
        if (error) throw error
        const marque = 'SELECT * FROM societes WHERE id_societe = (SELECT id_societe FROM pieces WHERE id_piece = ' + results.rows.id_marque + ')'
        return res.status(200).send({success: 1, data: {marque, results: results.rows}})
    })
}

exports.filter = (req,res) => {
    pool.query(shopQueries.filter, [req.query['type'],req.query['marque'], 0, req.query['price']], (error, results) => {
        if(error) throw error
        return res.status(200).send({success: 1, data: results.rows})
    })
}