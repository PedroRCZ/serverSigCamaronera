const { Router } = require('express');
const router = Router();

const { getCamaron, createCamaron, getCamaronById } = require('../controllers/controllerCamaron');

router.get('/facturar/camaron/', getCamaron );
router.get('/facturar/camaron/:id', getCamaronById);


module.exports = router;