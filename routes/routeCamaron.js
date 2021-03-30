const { Router } = require('express');
const router = Router();

const { getCamaron, createCamaron, getCamaronById , decrementoCamaron} = require('../controllers/controllerCamaron');

router.get('/facturar/camaron/', getCamaron );
router.get('/facturar/camaron/:id', getCamaronById);
router.put('/facturar/camaron/:id', decrementoCamaron);


module.exports = router;