
const { Router } = require('express');
const router = Router();

const { getVenta } = require('../controllers/visualizarVentasController');

router.get('/ventas/visualizar', getVenta )

module.exports = router;