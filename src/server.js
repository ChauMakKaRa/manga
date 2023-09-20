require('dotenv').config();

const express = require('express');
const configViewEngine = require('./config/viewEngine');
const router = require('./routes/web');

const app = express();
const port = process.env.port || 3002;

//views engine ejs.
configViewEngine(app);

// router api.
app.use('/',router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})