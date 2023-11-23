const Shipper = require('../models/shipments');
const Paied = require('../models/paied');
const User = require('../models/admin');
const nodemailer = require('nodemailer');

const pageShiper = async (req, res, next) => {
    Shipper.find({})
        .then(shippers => res.render('shipper/home', {
            session: req.session,
            shippers: shippers,
        }))
}
const Delivered = async (req, res, next) =>{
    Shipper.updateMany({_id: req.query.id}, {$set: {
        delivered: true,
    }})
        .then(() => res.redirect('back'))
        .catch(next);
}

const Returned = async (req, res, next) =>{
    Shipper.updateMany({_id: req.query.id}, {$set: {
        delivered: false,
        returned: true,
    }})
        .then(() => res.redirect('back'))
        .catch(next);
}

const getConfirm = async (req, res, next) => {
    Shipper.find({})
        .then(shipments => res.render('admin/don_hang',{
            session: req.session,
            shipments: shipments
        }))
    ;
}

let sendConfirmEmail = async(req, res, next) => {
    const getEmail = await User.findById(req.query.id);
    var email_user = getEmail.email;
    let transporter = nodemailer.createTransport({
        host: "localhost",
        port: 27017,
        auth: {
          user: "rak949427@gmail.com",
          pass: "18121102kr@",
        },
      });
      
    await transporter.sendMail({
        from: 'rak949427@gmail.com', // sender address
        to: email_user, // list of receivers
        subject: "Hello ✔", // Subject linea
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    res.json('gửi thành công');

    
}
module.exports = {
    pageShiper,
    Delivered,
    Returned,
    sendConfirmEmail,
    getConfirm,
}