const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
  check,
  validationResult,
  body
} = require('express-validator');
const db = require('../database/models');
const countrys = db.countrys;
const provinces = db.provinces;
const users = db.users;


module.exports = {
  register: async (req, res) => {
    //let paises = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'paises.json')));
    const paises = await countrys.findAll();
    const provincias = await provinces.findAll();

    res.render(path.resolve(__dirname, '../views/user/register'), { paises, provincias })
  },
  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      //return res.send(errors.mapped())
      let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        provinces_id: req.body.province,
        countrys_id: req.body.country,
        images: req.file.filename,
        roles_id: 1
      }
      

      users.create(user)
      .then(resultado =>{
        res.redirect('/login')
      })
      .catch(e=> res.send(e))

    } else {
      return res.render(path.resolve(__dirname, '..', 'views', 'user', 'register'), {
        errors: errors.mapped(), old: req.body,countrys
      });
      /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {
        encoding: 'utf-8'}))
      let ultimoUser = users.pop()
      users.push(ultimoUser);*/

      /*users.push(user);
      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersJSON);
      /*} else {
      return res.render(path.resolve(__dirname, '../views/user/register'), {
        errors: errors.errors,  old: req.body
      });
      }*/
    }
  },
  index: function (req, res) {
    res.render(path.resolve(__dirname, '../views/user/login'))
  },

  ingresar: async (req, res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()) {

      /*let archivoUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
      let usuarioLogueado = users.find(usuario => usuario.email == req.body.email)
      delete usuarioLogueado.password;
      req.session.usuario = usuarioLogueado;
      if (req.body.recordarme) {
        res.cookie('email', usuarioLogueado.email, { maxAge: 1000 * 60 * 60 * 24 })}
      res.redirect('/');*/
      //return res.send(errors.mapped())

      /*let usuarioLogueado = await users.findOne({where: {email: req.body.email}})
       
       delete usuarioLogueado.password;
       req.session.usuario = usuarioLogueado;
       //return res.send (req.session.usuario)
       if(req.body.recordarme){
           res.cookie('email', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 48})
           res.redirect('/');
       } else{
       
       return res.render(path.resolve(__dirname, '..', 'views', 'user', 'login'), {
         errors: errors.mapped(),  old: req.body});
       }*/
      users.findOne({ where: { email: req.body.email } })
        .then(user => {
          let userLogueado = user;
          delete userLogueado.password;
          req.session.user = userLogueado;
          //console.log('asdasd' + req.body.rememberme);
          if (req.body.rememberme) {
            //Crear la cookie de ese usuario
            res.cookie('email', userLogueado.email, { maxAge: 1000 * 60 * 60 * 24 })
            //console.log('asdasd' + ' ' +req.cookies.email);
          }
          res.redirect('/');
        })
        .catch(error => res.send(error));
    } else {
      res.render(path.resolve(__dirname, '../views/user/login'), {
        errors: errors.mapped(), old: req.body
      })
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie('email', null, { maxAge: -1 });
    res.redirect('/')
  }
}