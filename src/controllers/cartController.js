const Cart = require('../models/cart');

const getCart = async(req, res, next) => {
    res.render('cart/cart',{session: req.session});
}

const postCart = async(req, res, next) => {
    res.json(req.body);
}



module.exports = {
    getCart,
    postCart
}