const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const port = process.env.PORT || 3000
app.listen (3000, () => {
    console.log('http://localhost:' + port);
})

let rutaHome = require('./routes/homeRoute');
app.use('/', rutaHome);

//