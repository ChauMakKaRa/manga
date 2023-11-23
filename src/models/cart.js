
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      product_name: {type: String},
      product_price: {type: String},
      quantity: {type: Number}
    }],
    total: {type: Number},
    username: {
      type: String, 
      require: true,
    }
    // Thêm các trường thông tin khác của cart nếu cần
  });

  
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;