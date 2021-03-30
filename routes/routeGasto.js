const { Router } = require('express');
const router = Router();

const { getGastos, getGastosById, createGastos, Prodcreate} = require('../controllers/controllerGastos');

router.get('/gastos/', getGastos );
router.get('/gastos/:id', getGastosById );
router.post('/gastos/', createGastos);
router.post('/gastos/f/', Prodcreate );

module.exports = router;