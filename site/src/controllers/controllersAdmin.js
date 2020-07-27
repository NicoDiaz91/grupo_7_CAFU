const path = require('path');
const fs = require ('fs');


module.exports = {
    index: (req,res) =>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdmin'),{camisetas});
    },
    create: (req, res) =>{
        //let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        res.render(path.resolve(__dirname, '..','views','admin','productAdd'));
    },
    save: (req,res)=>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        
        let ultimaCamiseta = camisetas.pop();
        camisetas.push(ultimaCamiseta);
        
        let nuevoProducto={
            id: ultimaCamiseta.id + 1,
            title: req.body.title,
            category: req.body.category,
            league: req.body.league,
            team: req.body.team,
            brand: req.body.brand,
            price: req.body.price,
            size: req.body.size,
            image: req.file.filename
        };
            camisetas.push(nuevoProducto);
            let nuevoProductoGuardar = JSON.stringify(camisetas,null,2)
            fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), nuevoProductoGuardar);
            res.redirect('/productAdmin');
    },
    show: (req,res)=>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        let miCamiseta;
        camisetas.forEach(camiseta => {
           if(camiseta.id == req.params.id){
               miCamiseta = camiseta;         
            }
        });
        res.render(path.resolve(__dirname, '..','views','productos','productDetail'), {miCamiseta})
    
    },
    destroy: (req,res)=>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        const camisetaDeleteId = req.params.id;
        const camisetasFinal = camisetas.filter(camiseta=> camiseta.id != camisetaDeleteId);
        let camisetasGuardar = JSON.stringify(camisetasFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), camisetasGuardar);
        res.redirect('/productAdmin');
    },
    edit: (req,res)=>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        const camisetasId = req.params.id;
        let camisetaEditar = camisetas.find(camiseta=> camiseta.id == camisetasId);
        res.render(path.resolve(__dirname, '..','views','admin','productEdit'), {camisetaEditar});
    },
    update: (req,res) =>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let camisetasUpdate = camisetas.map(camiseta => {
            if(camiseta.id == req.body.id){
                return camiseta = req.body;
            }
            return camiseta;
        });
        let camisetasActualizar = JSON.stringify(camisetasUpdate,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), camisetasActualizar);
        res.redirect('/productAdmin');
    }
}