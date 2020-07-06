const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const webRoutes = require('./routes/web');
const productosRoutes = require('./routes/productos')



app.use(webRoutes);
app.use(productosRoutes);


app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo') );