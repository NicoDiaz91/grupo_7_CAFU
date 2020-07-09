const express = require('express');
const router = express.Router();
const path = require ('path');

const controllersProductos = require(path.resolve(__dirname, '../controllers/controllersProductos'));

router.get('/productos', controllersProductos.index );
router.get('/productos/detalle', controllersProductos.detail);


module.exports = router;