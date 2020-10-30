var express = require('express');
var router = express.Router();
var productsControllers =  require('../controllers/products');


router.get('/', productsControllers.products);
router.get('/alta', productsControllers.alta);
router.get('/compra', productsControllers.compra);



module.exports = router;