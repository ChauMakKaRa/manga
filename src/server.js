require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');

const routerAccount = require('./routes/accounts');
const routerWeb = require('./routes/web');
const routerContact = require('./routes/contact');
const routerCart = require('./routes/cart');

const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const bodyParser = require('body-parser');
  
const app = express();
const port = process.env.port || 3002;
const db = require('./config/db');



app.use(expressLayouts);

// connect db 
db.connect();
//views engine ejs.
configViewEngine(app);

// lưu thông tin đăng nhập với cookies parser

app.use(bodyParser.urlencoded({ extended: true }));

//lưu thông tin đăng nhập với session 
app.use(session({
  secret: 'thisisrandom', // Thay thế bằng khóa bí mật thực tế
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:  600000
  }
}));


app.use('/', routerContact);
app.use('/', routerWeb);
app.use('/', routerAccount);
app.use('/', routerCart);


app.use(express.json())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})