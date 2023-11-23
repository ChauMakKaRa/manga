const mongoose = require('mongoose');

const shipmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      product_id: {
        type: String,
      },
      delivered: {
        type: Boolean,
        default: false
      },
      returned: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      user_id:{
        type: Object, ref: 'Admin',
      },
});

const Shipments = mongoose.model('shipments', shipmentsSchema);;
module.exports = Shipments;