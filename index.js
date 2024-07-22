import express from 'express';
import router from './routes/index.js';


const app = express();


//Defnir puerto
const port = process.env.PORT || 4000;


// Enable PUG
app.set('view engine', 'pug');


//Definir la carpeta ñublica
app.use(express.static('public'));


//Agregar Router
app.use('/', router);



app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})