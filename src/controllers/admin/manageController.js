const Paied = require('../../models/paied');
const Shipper = require('../../models/shipments');
const User = require('../../models/admin');
const Product = require('../../models/product');
const { session } = require('passport');
const duyetOrder = async(req, res, next) => {
    const getProductId = await Paied.findById(req.query.id);
    const id_user = await User.find({name: getProductId.customer[0].name});
    const product = await Product.findOne({product_name: getProductId.products[0].product_name});

    let addshipper = new Shipper({
        name: getProductId.products[0].product_name,
        product_id: getProductId._id,
        user_id: id_user,
        confirm: 'Chưa gửi',
    });
    
    if(product.product_quantity > 0){
        try {
            await Paied.updateOne({_id: req.query.id}, {$set: {
              status: 'Đang giao',
              ordered: true,
            }});
          
            await Product.updateOne({product_name: getProductId.products[0].product_name}, { $inc: { product_quantity: -1 } }, { new: true });
          
            await addshipper.save();
    
            return res.redirect('back');
          } catch (err) {
            console.log(err);
            // Xử lý lỗi
          }
    }else{
        res.render('error', { error: 'Sản phẩm đã hết ', session: req.session });
    }
}


module.exports = {
    duyetOrder,
}
  