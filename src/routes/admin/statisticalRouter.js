const express = require('express');
const routerStatistical = express.Router();
const {statistical} = require('../../controllers/admin/statisticalController');


routerStatistical.get('/statistical', statistical);

module.exports = routerStatistical;