
const { Router } = require('express');
const router = Router();

const { getCliente, createCliente, getClienById } = require('../controllers/controllerCliente');

router.get('/cliente', getCliente );
router.get('/cliente/:id', getClienById);
router.post('/cliente', createCliente);

module.exports = router;