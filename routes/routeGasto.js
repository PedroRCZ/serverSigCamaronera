const { Router } = require('express');
const router = Router();

const { getGastos, getGastosById, createGastos } = require('../controllers/controllerGastos');

router.get('/gastos/', getGastos );
router.get('/gastos/:id', getGastosById );
router.post('/gastos/', createGastos);

module.exports = router;