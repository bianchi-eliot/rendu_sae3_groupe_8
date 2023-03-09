const shopControllers = require('./shop.controllers_V1.0.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache')

router.get('/',cache(300), shopControllers.list)

router.get('/societes', shopControllers.allSocietes)
router.get('/types_pieces', shopControllers.allTypesPieces)

router.post('/validAdd', shopControllers.add)
router.post('/validUpdate', shopControllers.update)
router.delete('/delete', shopControllers.delete)

router.get('/piece:id', shopControllers.showOne)
router.get('/filter', shopControllers.filter)

module.exports = router