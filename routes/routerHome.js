const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ahora funciona?')
    /* res.sendFile(path.resolve(__dirname, './views/home.html')) */
});

module.exports = router;