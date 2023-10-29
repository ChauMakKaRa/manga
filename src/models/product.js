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
       product_price : {
              type: Number
       },
       product_image : {
              type: String
       },
       product_quantity: {
              type:  Number
       },
       amount : {
              type:  Number,
       },
       id: {
              type: Number,
       },
});

productSchema.pre('save', function (next) {
       const doc = this;
       if (doc.isNew) {
         mongoose.model('Product', productSchema)
           .findOne({}, {}, { sort: { id: -1 } })
           .then((lastProduct) => {
             doc.id = lastProduct ? lastProduct.id + 1 : 1;
             next();
           })
           .catch((error) => {
             next(error);
           });
       } else {
         next();
       }
     });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;