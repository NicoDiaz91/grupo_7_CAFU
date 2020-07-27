const path = require('path');
const fs = require ('fs');


module.exports = {
    //index: function (req, res){
      //  res.render(path.resolve(__dirname, '../views/productos/productos'))
      index: (req,res) =>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{camisetas});
    },
    detail: function (req, res){
        res.render(path.resolve(__dirname, '../views/productos/productDetail'))
    },
    cart: function (req, res){
        res.render(path.resolve(__dirname, '../views/productos/productCart'))
    }
}