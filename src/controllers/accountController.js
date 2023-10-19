
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
        try{
            if(check.password === req.body.password) {
                req.session.user = check.name;
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



const getRegister = (req, res, next) => {
    res.render('acount/register',{
        error,
        session: req.session
    });
}

const handleRegister = async(req, res, next) => {
   
    let user = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
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
    
