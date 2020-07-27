const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const webRoutes = require('./routes/web');
const productosRoutes = require('./routes/productos');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');



app.use(webRoutes);
app.use(productosRoutes);
app.use(adminRoutes);
app.use(userRoutes);


app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo') );