const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
       brand_id : {
              type: String
       },
       product_name : {
              type: String
       },
       product_desc : {
              type: String
       },
       product_content : {
              type: String
       },
       product_price : {
              type: Number
       },
       product_image : {
              type: String
       },
       product_quantity: {
              type:  Number
       },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;