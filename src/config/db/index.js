const mongoose = require('mongoose');

async function connect() {
  try{
    await mongoose.connect('mongodb://127.0.0.1/manga');
    console.log("Kết nối với database thành công!!");
  }catch(error) {
    console.log("Kết nối thất bại!!");
  }
}

module.exports = { connect }