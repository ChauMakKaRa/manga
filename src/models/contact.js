const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    require: true,
    ref: 'User' ,

  },
  phone: {type: String},
  email: {type: String},
  content: {type: String},
  // Thêm các trường thông tin khác của contact nếu cần
});

const Contacts = mongoose.model('Contacts', contactsSchema);;
module.exports = Contacts;