const express = require('express');

const router = express.Router();
const { 
        getHomeController, 
        getHello, 
        viewport,
    } = require('../controllers/homeController');

const {getProductController,} = require('../controllers/productController');
const {pageShiper, Delivered, Returned, sendConfirmEmail, getConfirm} = require('../controllers/shipperController');

router.get('/', getHomeController);
router.get('/hello', getHello);
router.get('/list', getProductController);   
router.get('/viewport', viewport);
router.get('/handleLogin', pageShiper);
// router.post('/order', sendConfirmEmail);
router.put('/delivered', Delivered);
router.put('/returned', Returned);
router.post('/send-confirm-email', sendConfirmEmail);
router.get('/send-confirm-email', getConfirm);
module.exports = router;