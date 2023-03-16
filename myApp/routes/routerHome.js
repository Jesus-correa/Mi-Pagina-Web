const express = require('express');
const router = express.Router();

const controller = require('../controllers/homeController.js')

router.get('/', (req, res) => {
    res.send(controller.home)
});
/* 
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/free.ejs'))
});

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/premium.ejs'))
}); */

module.exports = router;