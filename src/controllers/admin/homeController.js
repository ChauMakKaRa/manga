const User = require('../../models/admin');
const Product = require('../../models/product');
const Paied = require('../../models/paied');
const Shipper = require('../../models/shipments');
const {mutipleMongsooseToObject} = require('../../until/mongoose');

const homeAdmin = async (req, res, next) => {
    Product.find({})
        .then(products => res.render('admin/home',{
            session: req.session,
            products: mutipleMongsooseToObject(products),
        }))
        .catch(next);
};

const addProduct = async (req, res, next) => {
    res.render('admin/addProduct', {
        session: req.session,
    })
}

const handleAdd = async (req, res, next) => {
    let newProduct = new Product({
        brand_id: req.body.category,
        product_name: req.body.product_name,
        product_image: req.body.image,
        amount: req.body.quantity,
        product_price: req.body.price,
    });
    
    newProduct.save();
    res.redirect('home');
}

const deleteProduct = async(req, res, next) => {
    Product.deleteOne({id: req.query.id})
        .then(() => res.redirect('back'))
        .catch(next);
}

const detailProduct = async(req, res, next) => {
    Product.find({})
        .then(products => res.render('admin/detail', {
            session: req.session,
            products: products,
        }))
        .catch(next);
}
const approveProduct = async (req, res, next) => {
    Paied.find({status: 'Chưa duyệt'})
        .then(paieds => res.render('admin/approve',{
            session: req.session,
            paieds: paieds,
        }))
        .catch(next);
}

const deleteOrder = async(req, res, next) => {
    Paied.deleteOne({_id: req.query.id}) 
        .then(() => res.redirect('back'))
        .catch(next);
}

const pageDonHang = async (req, res, next) => {
    Shipper.find({})
        .then((shipments, peieds) => res.render('admin/don_hang',{
            session: req.session,
            shipments: shipments,
            peieds: peieds,
        }))
        .catch(next);
}

const deleteDelivered = async(req, res, next) => {
    Shipper.deleteOne({_id: req.query.id})
        .then(() => res.redirect('back'))
        .catch(next);
}
module.exports = {
    homeAdmin, 
    addProduct,
    handleAdd,
    deleteProduct,
    detailProduct,
    approveProduct,
    deleteOrder,
    pageDonHang,
    deleteDelivered,
}