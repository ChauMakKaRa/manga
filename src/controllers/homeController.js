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

const viewport = async(req, res, next) =>{
    tableProduct.findById({_id: req.query.id})
        .then(product => res.render('product/viewport',{
            session: req.session,
            product: product
        }))
        .catch(next);
}

module.exports = {
    getHello, 
    getHomeController, 
    viewport,
}