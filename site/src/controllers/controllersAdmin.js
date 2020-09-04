const path = require('path');
const fs = require ('fs');
const db = require ('../database/models');
const Product = require('../database/models/Product');
const { setFlagsFromString } = require('v8');
const products = db.products;
const categorys = db.categorys;
const leagues = db.leagues;
const brands = db.brands;
const seasons = db.seasons;

module.exports = {
    index: (req,res) =>{
        // PARA JSON
        //let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        /* db.sequelize
        .query('select * from products')
        .then(remeras => {
            return res.send(remeras[0])
        })        
        .catch(error =>{
            res.send(error)
        })*/
        products.findAll()
        .then(camisetas => {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdmin'),{camisetas})
        })
        .catch(error =>{
            res.send(error)
        })
    },
    create: async (req, res) => {
        //NO FUNCIONA (no para de cargar y nunca se renderiza la vista)

        const categorias = await categorys.findAll();
        const ligas = await leagues.findAll();
        const marcas = await brands.findAll();
        const temporadas = await seasons.findAll();

            res.render(path.resolve(__dirname, '..','views','admin','productAdd'),{categorias, ligas, marcas, temporadas})
        
        /*let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorys.json')));
        let ligas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'leagues.json')));
*/
 //       res.render(path.resolve(__dirname, '..','views','admin','productAdd'),{categorias, ligas});
    },
    save: (req,res)=>{
       /* let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json'), {
            encoding: 'utf-8'}));

        let ultimaCamiseta = camisetas.pop();
        camisetas.push(ultimaCamiseta);*/
        let _body = {
            title: req.body.title,
            categorys_id: req.body.category,
            leagues_id: req.body.league,
            brands_id: req.body.brand,
            seasons_id: req.body.season,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.filename
        };
        products.create(_body)
        .then(camiseta => {
            res.redirect('/productAdmin')
        })
        .catch(error => res.send(error));
           /* camisetas.push(nuevoProducto);
            let nuevoProductoGuardar = JSON.stringify(camisetas,null,2)
            fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), nuevoProductoGuardar);*/
        
    },
    show: async (req,res)=>{
        /* CON JSON
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        let miCamiseta;
        camisetas.forEach(camiseta => {
           if(camiseta.id == req.pams.id){
               miCamiseta = camiseta;         
            }
        });*/
        const categorias = await categorys.findAll();
        const ligas = await leagues.findAll();
        const marcas = await brands.findAll();
        const temporadas = await seasons.findAll();

        const miCamiseta = await products.findByPk(req.params.id)
        
        res.render(path.resolve(__dirname, '..','views','productos','productDetail'), {miCamiseta, categorias, ligas, marcas, temporadas})
        

    
    },
    destroy: (req,res)=>{
        products.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(res.redirect('/productAdmin'))
        .catch(error => res.send(error))

        /*let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        const camisetaDeleteId = req.params.id;
        const camisetasFinal = camisetas.filter(camiseta=> camiseta.id != camisetaDeleteId);
        let camisetasGuardar = JSON.stringify(camisetasFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), camisetasGuardar);*/
    },
    edit: async (req,res)=>{
        /*
        let camisetas =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','camisetas.json')));
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorys.json')));
        let ligas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'leagues.json')));
        const camisetasId = req.params.id;*/

        //let camisetaEditar = camisetas.find(camiseta=> camiseta.id == camisetasId);

        const categorias = await categorys.findAll();
        const ligas = await leagues.findAll();
        const marcas = await brands.findAll();
        const temporadas = await seasons.findAll();

        products.findByPk(req.params.id)
        .then(camisetaEditar =>{
            res.render(path.resolve(__dirname, '..','views','admin','productEdit'), {camisetaEditar, categorias, ligas, marcas, temporadas})})
        .catch(error => res.send(error));
    },
    update: (req,res) =>{
        /*
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
        fs.writeFileSync(path.resolve(__dirname,'..','data','camisetas.json'), camisetasActualizar)*/
        products.update({
            title: req.body.title,
            categorys_id: req.body.category,
            leagues_id: req.body.league,
            brands_id: req.body.brand,
            seasons_id: req.body.season,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.filename
        },{
            where: {
                id: req.params.id
            }
        })
        .then(
        res.redirect('/productAdmin'))
        .catch(error => res.send(error))
    }
}