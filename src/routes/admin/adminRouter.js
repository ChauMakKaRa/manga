const express = require('express');
const routerAdmin = express.Router();

const {homeAdmin,addProduct,handleAdd, deleteProduct,detailProduct,
    approveProduct, deleteOrder, pageDonHang, deleteDelivered,
    Commodities,ContactPage,deleteContact,
} = require('../../controllers/admin/homeController');

routerAdmin.get('/home', homeAdmin);
routerAdmin.get('/order', pageDonHang);
routerAdmin.get('/addProduct', addProduct);
routerAdmin.post('/handleAdd', handleAdd);
routerAdmin.delete('/deleteProduct', deleteProduct);
routerAdmin.get('/detail', detailProduct);
routerAdmin.get('/approve', approveProduct);
routerAdmin.delete('/deleteOrder', deleteOrder);
routerAdmin.delete('/xoa-don-hang-da-giao', deleteDelivered);
routerAdmin.route('/Commodities').get(Commodities);
routerAdmin.route('/lien_he_admin').get(ContactPage).delete(deleteContact);
module.exports = routerAdmin;
