const Contact = require('../models/contact');

const getContact = async(req, res, next) => {
    res.render('contact/contact',{session: req.session});
}

const postContact = async(req, res, next) => {
    res.json(req.body);
}


module.exports = {
    postContact,
    getContact,
  
}