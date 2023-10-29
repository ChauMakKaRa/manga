const express = require('express');
const routerCart = express.Router();
const axios = require('axios');

const {getCart,postCart,destroy,submitFormCarts,changeAddres, getPaied} = require('../controllers/cartController');

routerCart.get('/cart', getCart);
routerCart.post('/add-to-cart', postCart);
routerCart.post('/deleteCart', destroy);
routerCart.post('/handleFormCart', submitFormCarts)
routerCart.put("/changeAddress", changeAddres);
routerCart.get('/paied', getPaied);


module.exports = routerCart;

