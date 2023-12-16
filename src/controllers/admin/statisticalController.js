const Product = require('../../models/product');
const Paied = require('../../models/paied');
const User = require('../../models/admin');

const statistical = async (req, res, next) => {
    const Users = await User.find({});
    let soluong = Users.length;
    let tong_loi_nhuan = 0;
    let tong_von = 0;
    let tong_da_ban = 0;
    const products = await Product.find();
    for(var i = 0; i < products.length; i++ ){
        tong_von = tong_von + products[i].capital_price*products[i].amount;
        tong_da_ban = tong_da_ban + (products[i].product_price - products[i].capital_price)*(products[i].amount - products[i].product_quantity);
    }
    tong_loi_nhuan = tong_da_ban - tong_von;
    
    Paied.find({status: 'Đang giao'})
            .then(paieds => res.render('admin/statistical',{
            session: req.session,
            paieds: paieds,
            soluong: soluong,
            tong_loi_nhuan: tong_loi_nhuan
        }))
        .catch(next);
}

module.exports = {
    statistical,
}