const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require('multer');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'camiseta-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const controllersProductos = require(path.resolve(__dirname, '../controllers/controllersProductos'));

router.get('/productos', controllersProductos.index );
router.get('/productCart', controllersProductos.cart );


module.exports = router;