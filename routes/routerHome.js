const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/free.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/premium.html'))
});

module.exports = router;