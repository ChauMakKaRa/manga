const express = require('express');
const routerManageUser = express.Router();

const {userHome,deleteUser,addUser,getEditUser,editUser,sendEmail} = require('../../controllers/admin/userController');

routerManageUser.get('/manageUser', userHome);
routerManageUser.get('/editUser', getEditUser);
routerManageUser.delete('/deleteUser', deleteUser);
routerManageUser.post('/addUser', addUser);
routerManageUser.put('/updateUser', editUser);
routerManageUser.get('/updateUser', editUser);
routerManageUser.post('/sendEmail',sendEmail);
module.exports = routerManageUser;