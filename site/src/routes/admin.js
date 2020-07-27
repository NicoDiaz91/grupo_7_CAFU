const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','img','camisetas'));
    },
    filename: function (req, file, cb) {
      cb(null, 'camiseta-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })


const controllersAdmin = require(path.resolve(__dirname, '../controllers/controllersAdmin'));

router.get('/productAdmin', controllersAdmin.index );
router.get("/productAdd", controllersAdmin.create);
router.post("/productAdd", upload.single('imagen'), controllersAdmin.save);
router.get('/productDetail/:id', controllersAdmin.show);
router.get('/delete/:id', controllersAdmin.destroy);
router.get('/productEdit/:id', controllersAdmin.edit);
router.put('/productEdit/:id', upload.single('imagen'), controllersAdmin.update);


module.exports = router;