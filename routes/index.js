var express = require('express');
var router = express.Router();
let productsControllers = require('../controllers/productsControler')

/* GET home page. */
router.get('/', productsControllers.inicio);

module.exports = router;
