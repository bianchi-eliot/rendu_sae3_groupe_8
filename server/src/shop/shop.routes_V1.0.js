const shopControllers = require("./shop.controllers.js");
const express = require('express');
const router = express.Router();

router.get("/", shopControllers.list);

router.get('/societes', shopControllers.allSocietes)
router.get('/types_pieces', shopControllers.allTypesPieces)

router.post("/validAdd", shopControllers.add);
router.post('/validUpdate', shopControllers.update)
router.delete('/delete', shopControllers.delete)

router.get("/piece:id", shopControllers.showOne);
router.get('/filter', shopControllers.filter);

module.exports = router;