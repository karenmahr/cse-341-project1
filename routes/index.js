//permite manejar rutas dentro de este mismo archivo
const router = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/* req contiene info que el usuario ejecuta
   res contiene la info que se le devuelve al usuario
   get: VER / OBTENER informacion del servidor*/
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});

//todas las rutas que vaya a usar, las escribo en mi index usando router.use
router.use('/users', require('./users'));

module.exports = router;