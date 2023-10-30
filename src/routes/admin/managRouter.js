const express = require('express');
const routerManageProduct = express.Router();
const {duyetOrder} = require('../../controllers/admin/manageController');

routerManageProduct.put('/duyetOrder', duyetOrder);

module.exports = routerManageProduct;