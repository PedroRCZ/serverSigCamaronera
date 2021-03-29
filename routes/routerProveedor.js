const { Router } = require('express');
const router = Router(); 

const { getProveedor, createProveedor, getProveedorById } = require('../controllers/controllerProveedor');

router.get('/gastos/proveedor/', getProveedor );
router.get('/gastos/proveedor/:id', getProveedorById );
router.post('/gastos/proveedor/', createProveedor);

module.exports = router;