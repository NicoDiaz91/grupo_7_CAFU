const path = require('path');
const fs = require ('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
  check,
  validationResult,
  body
} = require('express-validator');


module.exports = {
    register: function (req, res){
        res.render(path.resolve(__dirname, '../views/user/register'))
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
          let user = {
            nombre: req.body.first_name,
            apellido: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            avatar:  req.file ? req.file.filename : '',
            role: 1
          }
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
          res.redirect('/login');
        } else {
          return res.render(path.resolve(__dirname, '../views/users/register'), {
            errors: errors.errors,  old: req.body
          });
        }
      },
      index: function (req, res){
        res.render(path.resolve(__dirname, '../views/user/login'))
    },
  
      login: function(req,res){
          res.render(path.resolve(__dirname,'..','views','user','login'))
      },
      ingresar: (req,res) =>{
        const errors = validationResult(req);
        if(errors.isEmpty() ) {
          let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
          let usuarioLogueado = archivoUsers.find(usuario =>usuario.email == req.body.email)
          delete usuarioLogueado.password;
          req.session.usuario = usuarioLogueado;
          if(req.body.recordarme){
            res.cookie('email', usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
          }
          res.redirect('/');
        }else{
          return res.render(path.resolve(__dirname, '../views/user/login'), {
            errors: errors.mapped(),  old: req.body});       
        }
  
      },
      logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
      }
}