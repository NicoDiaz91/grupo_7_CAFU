const path = require('path');
const fs = require ('fs');


module.exports = {
    create: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/admin/productAdd.html'))
    },
}