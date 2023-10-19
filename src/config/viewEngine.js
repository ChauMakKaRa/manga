const express = require('express');
const path = require('path');
const currentPath = 'C:\\Users\\HP\\Desktop\\nienluan\\manga\\src\\views';
const configViewEngine = (app) => {
    
    //dẫn tới thư mục views
    app.set('view engine', 'ejs');

    app.set('views', path.join(currentPath));


    // đường dẫn của ảnh
    app.use(express.static('./src' + '/public'))

}

module.exports = configViewEngine;