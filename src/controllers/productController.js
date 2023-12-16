const { session } = require('passport');
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


const getSearch = async(req, res, next) => {
    const searchKey = req.body.key?.toString();
    await tableProduct.find({ product_name: { $regex: searchKey, $options: 'i' } })
        .then(products => res.render('product/listSearch', {
            session: session,
            products: mutipleMongsooseToObject(products),
        }))
        .catch(next);
}
module.exports = {
    getProductController,
    getSearch
}