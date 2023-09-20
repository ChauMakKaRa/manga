const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send('Hello World!')
})
  
router.get('/hello', (req, res) => {
   res.render('sample')
})

module.exports = router;