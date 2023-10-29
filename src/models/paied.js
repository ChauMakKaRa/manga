const mongoose = require('mongoose');

const paidSchema = new mongoose.Schema({
  customer: [{
    name: {type: String},
    address: {type: String},
    phone: {type: String},
  }],

  products: [{
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    product_name: {
      type : String,
    }
  }],
  ordered: {
    type: Boolean,
    require: true,
  },
  status: {
    type: String,
    require: true,
  }
});

const Paied = mongoose.model('Paied', paidSchema);

module.exports = Paied;