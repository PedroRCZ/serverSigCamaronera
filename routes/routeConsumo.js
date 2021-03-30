const { Router } = require('express');
const router = Router();

const { getConsumo, createConsuno, getPiscinaById, getCorridaById, getConsumoSumado, getGastoSumado } = require('../controllers/controllerConsumo');

router.get('/inventario/', getConsumo );
router.get('/inventario/consumo/', getConsumoSumado );
router.get('/inventario/gasto/', getGastoSumado );
router.post('/inventario/', createConsuno);
router.get('/inventario/piscina/:id', getPiscinaById);
router.get('/inventario/corrida/:id', getCorridaById);

module.exports = router;