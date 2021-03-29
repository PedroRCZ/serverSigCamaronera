const { Router } = require('express');
const router = Router();

const { getConsumo, createConsuno, getPiscinaById, getCorridaById } = require('../controllers/controllerConsumo');

router.get('/inventario/', getConsumo );
router.post('/inventario/', createConsuno);
router.get('/inventario/piscina/:id', getPiscinaById);
router.get('/inventario/corrida/:id', getCorridaById);

module.exports = router;