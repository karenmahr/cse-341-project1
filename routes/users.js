const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validation = require('../middleware/validate');

//la logica de lo que devuelven estas rutas esta escrita en controller

//para ver/obtener algo
router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

module.exports = router;