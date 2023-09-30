const tableProduct = require('../models/product');


const getHomeController = async (req, res, next) => {
    const products = 
    await tableProduct.find({})
        .then(products => res.render('home',{products}))
        .catch(error => next(error));
};


const getHello = (req, res) => {
    res.render('sample')
}

const postLogin = (req, res, next) => {
    res.render('acount/login');
}

const postRegister = (req, res, next) => {
    res.render('acount/register');
}

const getListProducts = (req, res, next) => {
    res.render('product/list');
}

const getContact = (req, res, next) => {
    res.render('contact/contact');
}

const getCart = (req, res, next) => {
    res.render('Cart/cart');
}

module.exports = {
    getHello, 
    getHomeController, 
    postLogin, 
    postRegister,
    getListProducts,
    getContact,
    getCart,
}