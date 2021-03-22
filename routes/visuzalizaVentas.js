
const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/visualizarVentasController');

router.get('/ventas/visualizar', getUsers )

module.exports = router;