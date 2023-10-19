const tableProduct = require('../models/product');
const {mutipleMongsooseToObject} = require('../until/mongoose');

const getProductController = async (req, res, next) => {
    const products = 
    await tableProduct.find({})
        .then(products => res.render('product/list',{
            products: mutipleMongsooseToObject(products),
            session: req.session
        }))
        .catch(error => next(error));
};

module.exports = {
    getProductController
}