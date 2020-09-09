const express = require('express');

const router = express.Router();

const path = require('path');

const bcrypt = require('bcrypt');

const fs = require('fs');

const multer = require('multer');

const {
  check,
  validationResult,
  body
} = require('express-validator');

const db = require('../database/models');

const {users} = require('../database/models')

const controllersUser = require(path.resolve(__dirname, '../controllers/controllersUser'));

//JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/img/users'));
  },
  filename: function (req, file, cb) {
    cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage })

router.get('/registro', controllersUser.register);

router.post('/registro', upload.single('images'), [
  check('firstName').isLength({
    min: 1
  }).withMessage('Nombre está vacío'),
  check('lastName').isLength({
    min: 1
  }).withMessage('Apellido está vacío'),
  check('email').isEmail().withMessage('Agregar un email válido'),

  body('email').custom((value) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == value) {
        return false
      }
    }
    return true
  }).withMessage('Este email ya está registrado'),

  check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),

  body('confirm_password').custom((value, { req }) => {
    if (req.body.password == value) {
      return true
    } else {
      return false
    }
  }).withMessage('Las contraseñas deben ser iguales'),

  body('images').custom((value, { req }) => {
    if (req.file != undefined) {
      return true
    }
    return false;
  }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
], controllersUser.create);

router.get('/login', controllersUser.index);

router.post('/login', [
  /*
  check('email').isEmail().withMessage('Agregar un email válido'),
  body('email').custom((value) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == value) {

        return true
      }
    }
    return true
  }).withMessage('Usuario no se encuentra registrado...'),
  check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
  body('password').custom((value, { req }) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(value, users[i].password)) {
          return true
        } else {
          return false
        }
      }
    }
  }).withMessage('Contraseña no coinciden...')*/
  
  /*check('email').isEmail().withMessage('Ingrese un mail válido.'),
  check('email').not().isEmpty().withMessage('El campo email no puede estar vacío'),
  body('email').custom( async (value) =>{
    let user = await users.findOne({
      where: {email: value}
    })
    if (user === null){
      return Promise.reject('El usuario no se encuentra registrado')
    } 
    return true
  }),
  check('password').isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
  check('password').not().isEmpty().withMessage('El campo contraseña no puede estar vacío'),
  body('password').custom( async (value, {req}) => {
    let user = await users.findOne({
      where: {email: req.body.email}
    })
    //console.log(bcrypt.compareSync(value, user.password))
    if(bcrypt.compareSync(value, user.password)){
      return true
    } else {
      return true
      //return false
    }
  })//.withMessage('Contraseña incorrecta')*/
  body('email').custom((value, {req}) => {
    return users.findOne({where:{email:value}}).then(user => {
      if (user && bcrypt.compareSync(req.body.password,user.password)) {
        return true;            
        } else{
        return true//Promise.reject('Credenciales Inválidas');
        }
    });
         
  }),
  check('email').isLength({
      min: 1
    }).withMessage('El campo nombre no puede estar vacío'),
  check('password').isLength({
      min: 1
    }).withMessage('El campo password no puede estar vacío'),
 
], controllersUser.ingresar);


router.get('/logout', controllersUser.logout);

module.exports = router;