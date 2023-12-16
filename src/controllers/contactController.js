const Contact = require('../models/contact');
const User = require('../models/admin');
const { name } = require('ejs');
const { session } = require('passport');
const getContact = async(req, res, next) => {
    res.render('contact/contact',{session: req.session});
}

const postContact = async(req, res, next) => {
    const checkUser = await User.findOne({email: req.body.email});
    if(checkUser) {
        let contact = new Contact({
            userId: checkUser._id,
            name: req.body.fullName,
            email: req.body.email,
            content: req.body.message,
        });
        contact.save();
        res.render('error',{error:"Đã gửi liên hệ thành công!!!", session: session});   
    }else{
        res.render('error',{error:"Email không chính xác!!!", session: session});
    }

}


module.exports = {
    postContact,
    getContact,
  
}