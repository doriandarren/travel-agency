import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();


//conectar 
db.authenticate()
    .then( () => console.log('Base datos Conectada'))
    .catch( error => console.log(error));


//Defnir puerto
const port = process.env.PORT || 4000;


// Enable PUG
app.set('view engine', 'pug');

// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
});


//Agregar body para leer dtos del formulario
app.use(express.urlencoded({extended: true}));



//Definir la carpeta ñublica
app.use(express.static('public'));


//Agregar Router
app.use('/', router);



app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})