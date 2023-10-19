const tableProduct = require('../models/product');
const {mutipleMongsooseToObject} = require('../until/mongoose');

const getHomeController = async (req, res, next) => {
    const products = 
    await tableProduct.find({})
        .then(products => res.render('home',{
            products: mutipleMongsooseToObject(products),
            session: req.session
        }))
        .catch(error => next(error));
};


const getHello = (req, res) => {
    res.render('sample',{session: req.session.user})
}



module.exports = {
    getHello, 
    getHomeController, 
}