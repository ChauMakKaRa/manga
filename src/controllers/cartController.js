const Cart = require('../models/cart');
const User = require('../models/admin');
const Product = require('../models/product');
const Paied = require('../models/paied');
const { session } = require('passport');
const {mutipleMongsooseToObject} = require('../until/mongoose');

const so_luong = 1;

const getCart = async(req, res, next) => {
    const carts = 
    await Cart.find({})
        .then(carts => res.render('cart/cart',{
            carts: mutipleMongsooseToObject(carts),
            session: req.session,
        }))
        .catch(error => next(error));
}

const postCart = async(req, res, next) => {
    const check = await Product.findOne({_id: req.query.id})
    let cart = new Cart({
        items: [{
            product_name: check.product_name,
            product_price: check.product_price,
            quantity: so_luong,
        }],
       
        total: check.product_quantity
    });
    cart.save();
    
    Product.find({})
        .then(() => res.redirect('back'))
        .catch(next);
}

const destroy = async(req, res, next) => {
    Cart.deleteOne({_id : req.query.id})
        .then(() => res.redirect('back'))
        .catch(next);
}

const submitFormCarts = async(req, res, next) => {
    const checkCarts = await Cart.find({_id: req.body.carts});
    for(let i=0 ; i<checkCarts.length;i++) {
        const paied = new Paied({
            customer: [{
                name: req.query.name,
                address: 'KTX A, ctu, đường 3/2, phường xuân khánh, quận Ninh Kiều, tp.Cần Thơ',
                phone: '0522679189',
            }],
            products: ({
                price: checkCarts[i].items[0].product_price,
                product_name: checkCarts[i].items[0].product_name,
                amount: checkCarts[i].items[0].quantity,
            }),
            ordered: false,
            status: 'Chưa duyệt',
        });
        paied.save();
    }
    Cart.deleteMany({_id: req.body.carts})
        .then(
            Paied.find({ordered : false})
            .then(paieds => res.render('paieds/paied', {
                paieds: paieds,
                session: req.session,
            }))
            .catch(next)
        )
        .catch(next);
}

const getPaied = async (req, res ,next) => {
    Paied.find({ordered : false})
        .then(paieds => res.render('paieds/paied', {
            paieds: paieds,
            session: req.session,
        }))
        .catch(next);

}
const changeAddres = async (req, res, next) => {
    Paied.updateMany({}, {$set: {
        'customer.$[].address' : req.query.address, 
        'customer.$[].phone' : req.query.phone
    }})
        .then(() => res.redirect('paied'))
        .catch(next);
}

module.exports = {
    getCart,
    postCart,
    destroy,
    submitFormCarts,
    changeAddres,
    getPaied
}