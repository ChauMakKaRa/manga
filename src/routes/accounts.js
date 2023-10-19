const express = require('express');
const routerAccount = express.Router();

const {getLogin,handleLogin,getRegister,handleRegister} = require('../controllers/accountController')
routerAccount.get('/login', getLogin);
routerAccount.post('/handleLogin', handleLogin);
routerAccount.get('/register', getRegister);
routerAccount.post('/handleRegister', handleRegister);


module.exports = routerAccount;
