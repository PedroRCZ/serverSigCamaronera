
const { Router } = require('express');
const router = Router();

const { getCliente, createCliente } = require('../controllers/controllerCliente');

router.get('/cliente', getCliente );
router.post('/cliente', createCliente);

module.exports = router;