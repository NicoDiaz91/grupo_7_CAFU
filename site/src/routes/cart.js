const express = require('express');
const router = express.Router();
const path = require ('path');

const controllersCart = require(path.resolve(__dirname, '../controllers/controllersCart'));

router.get('/productCart', controllersCart.index );


module.exports = router;