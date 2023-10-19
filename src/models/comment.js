const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    content: {type: String},
    // Thêm các trường thông tin khác của comment nếu cần
  });
  
const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
