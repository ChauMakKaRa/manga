const express = require('express');
const routerCart = express.Router();

const {getCart,postCart} = require('../controllers/cartController');

routerCart.get('/cart', getCart);
routerCart.post('/handleCart', postCart);

module.exports = routerCart;

