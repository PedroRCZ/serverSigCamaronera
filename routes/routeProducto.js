const { Router } = require('express');
const router = Router();

const { getProducto, getProductoById, createProducto, getProd, getProdExiste } = require('../controllers/controllerProducto');

router.get('/gastos/producto/', getProducto );
router.get('/gastos/producto/:id', getProductoById);
router.post('/gastos/producto/', createProducto);
router.get('/gastos/prod/', getProd );
router.post('/gastos/prod/existe/', getProdExiste );

module.exports = router;