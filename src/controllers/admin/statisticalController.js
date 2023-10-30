const Product = require('../../models/product');
const Paied = require('../../models/paied');
const User = require('../../models/admin');

const statistical = async (req, res, next) => {
    const Users = await User.find({});
    let soluong = Users.length;

    Paied.find({status: 'Đang giao'})
            .then(paieds => res.render('admin/statistical',{
            session: req.session,
            paieds: paieds,
            soluong: soluong,
        }))
        .catch(next);
}

module.exports = {
    statistical,
}