
const Admin = require('../models/admin');
const tableProduct = require('../models/product');
const bcrypt = require('bcryptjs');
const {mutipleMongsooseToObject} = require('../until/mongoose');

const error = '';
const message = '';

const getLogin = (req, res, next) => {
    req.session.image = '';
    res.render('acount/login',{
        error,
         message,
        session: req.session
    })
}
    
const handleLogin = async(req, res, next) => {
    const check = await Admin.findOne({email: req.body.email})
    if (req.body.email == 'admin@gmail.com') {
        try{
            if(check.password === req.body.password) {
                req.session.name = check.name;
                req.session.image = check.image;
                const products = 
                await tableProduct.find({})
                    .then(products => res.render('admin/home',{
                        products: mutipleMongsooseToObject(products),
                        session: req.session
                    }))
                    .catch(error => next(error));
            }else{
                res.render('acount/login', { 
                    error: 'Sai thông tin mật khẩu.' ,
                    message,
                    session: '',
                });
            }
        }catch{
            res.render('acount/login', { 
                error: 'Sai thông tin tài khoản.',
                message,
                session: '',
            });
        }
    }else{
        try{
            if(check.password === req.body.password) {
                req.session.name = check.name;
                req.session.image = check.image;
                const products = 
                await tableProduct.find({})
                    .then(products => res.render('home',{
                        products: mutipleMongsooseToObject(products),
                        session: req.session
                    }))
                    .catch(error => next(error));
            }else{
                res.render('acount/login', { 
                    error: 'Sai thông tin mật khẩu.' ,
                    message,
                    session: req.session
                });
            }
        }catch{
            res.render('acount/login', { 
                error: 'Sai thông tin tài khoản.',
                message,
                session: req.session
            });
        }
    }
}



const getRegister = (req, res, next) => {
    res.render('acount/register',{
        error,
        session: req.session
    });
}

const handleRegister = async(req, res, next) => {
    let user = new Admin({
        admin_role: 'User',
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image:'https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg',
    });
    const checkEmail = await Admin.findOne({email: req.body.email})
    if(req.body.password != req.body.password_again ){
        res.render('acount/register', {
            error: 'Mật khẩu không trùng khớp',
        });
    }else if(checkEmail){
        res.render('acount/register', {
            error: 'Tài khoản đã tồn tại',
        })
    }else{
        user.save()
            .then(user => {
                res.render('acount/login',{
                    message: 'Đăng ký thành công',
                    error,
                    session: '',
                })
            })
            .catch(next);
    }
}

module.exports = {
    getLogin,
    handleLogin,
    getRegister,
    handleRegister,
};
    
