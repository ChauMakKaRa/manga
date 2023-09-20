const express = require('express');

const router = express.Router();
const { getHomeController, getHello} = require('../controllers/homeController');


router.get('/', getHomeController);
router.get('/hello', getHello);

module.exports = router;