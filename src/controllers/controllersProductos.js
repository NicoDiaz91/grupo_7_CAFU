const path = require('path');
const fs = require ('fs');


module.exports = {
    index: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/productos/productos.html'))
    },
}