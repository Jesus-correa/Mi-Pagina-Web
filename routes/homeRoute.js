const express = require('express');
const router = express.Router();


router.get('/', function (res, req) {
    res.send('../views/home.ejs');
})

module.exports = router;
