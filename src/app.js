const express = require ('express');
const app = express();

const rutaHome = require('../routes/routerHome.js')

const path = require('path');

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000
app.listen(3000,() => {
    console.log("http://localhost:"+ port);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.use('/', rutaHome)