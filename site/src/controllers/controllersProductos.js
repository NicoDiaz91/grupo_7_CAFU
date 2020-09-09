const path = require('path');
const fs = require ('fs');
const db = require ('../database/models');
const Product = require('../database/models/Product');
const { setFlagsFromString } = require('v8');
const products = db.products;


module.exports = {
    //index: function (req, res){
      //  res.render(path.resolve(__dirname, '../views/productos/productos'))
      index: (req,res) =>{
        //let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')))
        products.findAll()
        .then(camisetas =>{
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{camisetas})})
        .catch(error => res.send(error))
    },
    cart: (req, res)=> {
        
        
        //let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        products.findAll(camiseta=>{
            if(camiseta.id == req.params.id){
                miCamiseta = camiseta;         
            }
        })
        .then(resultado => res.render(path.resolve(__dirname, '..','views','productos','productCart'), {miCamiseta})
        .catch(e => res.send(e)))
    }   
}