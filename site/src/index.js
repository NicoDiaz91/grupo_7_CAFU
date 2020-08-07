const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const access = require('./middlewares/access');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    secret : 'TopSecret',
    resave : true,
    saveUninitialized : true
}));

app.use(cookies());

app.use(access);

const webRoutes = require('./routes/web');
const productosRoutes = require('./routes/productos');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');



app.use(webRoutes);
app.use(productosRoutes);
app.use(adminRoutes);
app.use(userRoutes);


app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo') );