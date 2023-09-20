const { model } = require('mongoose');
const express = require('express');

const path = require('path');

const configViewEngine = (app) => {
    
    //dẫn tới thư mục views
    app.set('views','./src' +'/views');
    app.set('view engine', 'ejs');

    // đường dẫn của ảnh
    app.use(express.static('./src' + '/public'))
// console.log('path:',path.join(__dirname, '/public'));
}

module.exports = configViewEngine;