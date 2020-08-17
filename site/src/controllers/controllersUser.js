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
      let paises = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'paises.json')));
        res.render(path.resolve(__dirname, '../views/user/register'),{paises})
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

          
          let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
            encoding: 'utf-8'}))

          
          let ultimoUser = users.pop()
          users.push(ultimoUser);

          let user = {
            id: ultimoUser.id +1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            city: req.body.city,
            country: req.body.country,
            avatar:  req.file ? req.file.filename : '',
            role: 1
          }

          users.push(user);

          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
          res.redirect('/login');
        } else {
          return res.render(path.resolve(__dirname, '../views/user/register'), {
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