// DEBUG=lego-webstore:* npm run devstart

const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req,res) {
	res.render('layout_page.ejs', {titre:'Home',page:'partials/inscription.ejs'});
});

router.get('/produits/:idproduct',productsController.product_infos);
router.get('/inscription',userController.inscription_page);
router.get('/produits',productsController.product_list);

module.exports = router;


