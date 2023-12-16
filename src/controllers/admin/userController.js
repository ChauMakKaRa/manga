const { session } = require('passport');
const User = require('../../models/admin');
const Shipper = require('../../models/shipments');
const nodemailer = require("nodemailer");
const userHome = async(req, res, next) => {
    User.find({})
        .then(users => res.render('admin/manageUser',{
            session: req.session,
            users: users,
        }))
        .catch(next);
}

const deleteUser = async(req, res, next) => {
    User.deleteOne({_id: req.query.id})
        .then(() => res.redirect('back'))
        .catch(next);
}

const addUser = async(req, res, next) => {
    let user = new User({
        admin_role: req.body.role,
        name: req.body.name,
        email: req.body.email,
        password: 'password',
        image:'https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg',
    });
    const checkEmail = await User.findOne({email: req.body.email});
    if(checkEmail){
        res.redirect('back', {
            error: 'Tài khoản đã tồn tại',
        })
    }else{
        user.save()
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

const getEditUser = async(req, res, next) => {
    User.findById(req.query.id)
        .then(users => res.render('admin/editUser',{
            session: req.session,
            users:users
        }))
        .catch(next);
}

const editUser = async(req, res, next) => {
    User.updateOne({_id: req.query.id}, {$set: {
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
            admin_role: req.body.role,
        }})
        .then()
        .catch(next);
    User.find({})
        .then(users => res.render('admin/manageUser',{
            session: req.session,
            users:users
        }))
        .catch(next);
        
}

const sendEmail = async (req, res, next) => {
    const checkUser = await User.findOne({_id: req.query.id});
    const emailUser = checkUser.email;
    console.log(emailUser);
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "rak949427@gmail.com",
            pass: "bkeo sicd aqiu jhrx",
        },
    });

    let mailOptions = {
        from: 'rak949427@gmail.com',
        to: `${emailUser}`,
        subject: '🌟 Xác nhận nhận hàng thành công 🌟',
        html: '<h1>Chào bạn!</h1><p>Chúng tôi rất vui thông báo rằng đơn hàng của bạn đã được nhận thành công.</p><p>Cảm ơn bạn đã tin tưởng và mua hàng từ chúng tôi!</p><p><b>Trân trọng,</b><br />Cửa hàng chúng tôi</p>'
    } 
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        Shipper.updateMany({}, {
            $set:{
                confirm: 'Đã gửi',   
            }
        })
        .then(() => res.render('error', {
            session: req.session,
            error: 'Gửi thành công'
        }))
        .catch(next);
      } catch(error) {
        console.error('Lỗi khi gửi email xác nhận: ' + error);
        return 'Có lỗi xảy ra khi gửi email xác nhận.';
      }


}
   
module.exports = {
    userHome,
    deleteUser,
    addUser,
    getEditUser,
    editUser,
    sendEmail
}