const express = require('express');
const router = express.Router();
const path = require ('path');

const controllersUser = require(path.resolve(__dirname, '../controllers/controllersUser'));

router.get('/login', controllersUser.index );
router.get('/registro', controllersUser.register)

module.exports = router;