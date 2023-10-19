const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Admin = new Schema({
  email : {
    type: String, 
    required: true
  },
  password : {
    type: String, 
    required: true
  },
  name : {
    type: String, 
    required: true
  },
  admin_phone : {
    type: String, 
  },
  image : {
    type: String, 
    required: true
  },
  
});

const User = mongoose.model('Admin', Admin);

module.exports = User;