import express from 'express';

const router = express.Router();


router.get('/', (req, res) =>{ //req lo que enviamos / res lo que exporees responde
    res.render('inicio');
});

router.get('/nosotros', (req, res) =>{ //req lo que enviamos / res lo que exporees responde

    const viajes = 'Viajes Alemania';

    res.render('nosotros', {
        viajes
    });
});



export default router;