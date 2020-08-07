const fs = require('fs');
const path = require('path');
let archivoUsers =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        
module.exports = (req,res,next) =>{
    res.locals.user = false;
    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    }else if(req.cookies.email){
        let user = archivoUsers.find(user => user.email == req.cookies.email)
        req.session.user = user;
        res.locals.user = user;
        return next();
    }else{
        return next();
    }
}