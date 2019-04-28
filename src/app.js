const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path'); 
const exphbs = require('express-handlebars');

// Initializations
const app = express();

// Base de datos
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Configuración del handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main-menu',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}));
app.set('view engine', '.hbs');

// Middleware
app.use(morgan('dev'));

app.use((req, res, next) => {

    next();
});

// Para que el servidor pueda recibir datos json
app.use(express.json());

// Para que el servidor pueda recibir datos desde un formulario, pero no files pesados    
app.use(express.urlencoded({extended: false}));

// Configuración para la subida de imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));

// Routes
app.use(require('./routes'))
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))

// Public
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;