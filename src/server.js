require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');

const routerAccount = require('./routes/accounts');
const routerWeb = require('./routes/web');
const routerContact = require('./routes/contact');
const routerCart = require('./routes/cart');
const routerPaied = require('./routes/paiedRouter');
const routerAdmin = require('./routes/admin/adminRouter');
const routerManageProduct = require('./routes/admin/managRouter');
const routerManageUser = require('./routes/admin/userRouter');
const routerStatistical = require('./routes/admin/statisticalRouter');

const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
  
const app = express();
const port = process.env.port || 3002;
const db = require('./config/db');

app.use(methodOverride('_method'));

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
    expires:  1800000
  }
}));


app.use('/', routerContact);
app.use('/', routerWeb);
app.use('/', routerAccount);
app.use('/', routerCart);   
app.use('/', routerPaied);
app.use('/', routerAdmin);
app.use('/', routerManageProduct);
app.use('/', routerManageUser);
app.use('/', routerStatistical);


app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});