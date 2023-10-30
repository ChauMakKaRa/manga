const { session } = require('passport');
const User = require('../../models/admin');

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
module.exports = {
    userHome,
    deleteUser,
    addUser,
    getEditUser,
    editUser,
}