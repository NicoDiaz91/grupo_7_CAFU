const path = require('path');
const fs = require ('fs');


module.exports = {
    index: (req,res) =>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdmin'),{camisetas});
    },
    create: (req, res) =>{
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorys.json')));
        let ligas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'leagues.json')));

        res.render(path.resolve(__dirname, '..','views','admin','productAdd'),{categorias, ligas});
    },
    save: (req,res)=>{
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json'), {
            encoding: 'utf-8'}));

        
        let ultimaCamiseta = camisetas.pop();
        camisetas.push(ultimaCamiseta);
        
        let nuevoProducto={
            id: ultimaCamiseta.id + 1,
            title: req.body.title,
            category: req.body.category,
            league: req.body.league,
            brand: req.body.brand,
            season: req.body.season,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file ? req.file.filename : '',
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
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorys.json')));
        let ligas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'leagues.json')));
        const camisetasId = req.params.id;
        let camisetaEditar = camisetas.find(camiseta=> camiseta.id == camisetasId);
        res.render(path.resolve(__dirname, '..','views','admin','productEdit'), {camisetaEditar,categorias,ligas});
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