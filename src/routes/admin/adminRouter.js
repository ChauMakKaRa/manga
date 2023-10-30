const express = require('express');
const routerAdmin = express.Router();

const {homeAdmin,addProduct,handleAdd, deleteProduct,detailProduct,approveProduct, deleteOrder} = require('../../controllers/admin/homeController');

routerAdmin.get('/home', homeAdmin);
routerAdmin.get('/addProduct', addProduct);
routerAdmin.post('/handleAdd', handleAdd);
routerAdmin.delete('/deleteProduct', deleteProduct);
routerAdmin.get('/detail', detailProduct);
routerAdmin.get('/approve', approveProduct);
routerAdmin.delete('/deleteOrder', deleteOrder),
module.exports = routerAdmin;
