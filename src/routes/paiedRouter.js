const express = require('express');
const routerPaied = express.Router();
const axios = require('axios');

const {handlePaieds,getOrdered} = require('../controllers/paiedController');

routerPaied.put("/handlePaieds", handlePaieds);
routerPaied.get('/ordered', getOrdered);

module.exports = routerPaied;

