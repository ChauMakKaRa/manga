const express = require('express');
const routerContact = express.Router();

const {getContact,postContact} = require('../controllers/contactController');

routerContact.get('/contact', getContact);
routerContact.post('/handleContact', postContact);

module.exports = routerContact;

