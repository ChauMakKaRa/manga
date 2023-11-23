const Paied = require('../models/paied');

const getOrdered = async (req, res, next) => {
    Paied.find({ordered : true, "customer.name": req.session.name})
        .then(ordereds => res.render('cart/ordered', {
            ordereds: ordereds,
            session: req.session,
        }))
        .catch(next);
}
const handlePaieds = async (req, res, next) => {
    Paied.updateMany({_id: req.body.paieds}, {$set: {
        ordered : true
    }})
        .then(() => res.redirect('ordered'))
        .catch(next);
}

module.exports = {
    handlePaieds,
    getOrdered,
};