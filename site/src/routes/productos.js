const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require('multer');

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
router.get('/productDetail/:id', controllersProductos.detail);
router.get('/productCart/:id?', controllersProductos.cart );


module.exports = router;