
const { Router } = require('express'); 
const router =  Router();

const { getVenta, createFactura } = require('../controllers/visualizarVentasController');

router.get('/ventas/visualizar', getVenta );
router.post('/ventas/agregar/', createFactura )

module.exports = router;