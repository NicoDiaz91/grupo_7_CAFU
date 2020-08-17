const express = require('express');

const router = express.Router();

const path = require ('path');

const bcrypt = require('bcrypt');

const fs = require('fs');

const multer = require('multer');

const {
    check,
    validationResult,
    body
} = require('express-validator');

const controllersUser = require(path.resolve(__dirname, '../controllers/controllersUser'));

let archivoUsers =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/users'));
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })

router.get('/registro', controllersUser.register);

router.post('/registro', upload.single('avatar'),[
    check('firstName').isLength({
        min: 1
      }).withMessage('Nombre está vacío'),
    check('lastName').isLength({min: 1
      }).withMessage('Apellido está vacío'),
    check('email').isEmail().withMessage('Agregar un email válido'),

    body('email').custom( (value) =>{
        for (let i = 0; i < archivoUsers.length; i++) {
            if (archivoUsers[i].email == value) {
                return false
            }
        }
        return true
    }).withMessage('Este email ya está registrado'),

    check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),

    body('confirm_password').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true         
        }else{
            return false 
        }    
    }).withMessage('Las contraseñas deben ser iguales'),

    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
        return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
  ], controllersUser.create);

  router.get('/login', controllersUser.index );

  router.post('/login',[
    check('email').isEmail().withMessage('Agregar un email válido'),
    body('email').custom( (value) =>{
      for (let i = 0; i < archivoUsers.length; i++) {
          if (archivoUsers[i].email == value) {
              
            return true    
          }
      }
      return false   
  }).withMessage('Usuario no se encuentra registrado...'),
  check('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
  body('password').custom((value, {req}) =>{
    for (let i = 0; i < archivoUsers.length; i++) {
      if (archivoUsers[i].email == req.body.email) {
        if(bcrypt.compareSync(value,archivoUsers[i].password)){
          return true
        }else{
          return false
        }
      }
  }
  }).withMessage('Contraseña no coinciden...')
  
  ]  ,controllersUser.ingresar);
  
    
    router.get('/logout', controllersUser.logout);

module.exports = router;