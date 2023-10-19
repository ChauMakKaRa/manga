const express = require('express');

const router = express.Router();
const { 
        getHomeController, 
        getHello, 
    } = require('../controllers/homeController');

const {getProductController} = require('../controllers/productController');

router.get('/', getHomeController);
router.get('/hello', getHello);
router.get('/list', getProductController);    

module.exports = router;