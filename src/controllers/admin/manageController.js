const Paied = require('../../models/paied');
const Shipper = require('../../models/shipments');
const User = require('../../models/admin');
const duyetOrder = async(req, res, next) => {
    const getProductId = await Paied.findById(req.query.id);
    const id_user = await User.find({name: getProductId.customer[0].name});
    let addshipper = new Shipper({
        name: getProductId.products[0].product_name,
        product_id: getProductId._id,
        user_id: id_user,
    });
    Paied.updateOne({_id: req.query.id}, {$set: {
        status: 'Đang giao',
        ordered: true,
    }})
        .then(addshipper.save())
        .then(() => res.redirect('back'))
        .catch(next);
}

module.exports = {
    duyetOrder,
}
  