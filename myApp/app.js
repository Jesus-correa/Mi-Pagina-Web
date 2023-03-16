var express = require('express');
var path = require('path');


var routerHome = require('./routes/routerHome.js');
var routerFree = require('routerFree.js');
var routerPremium = require('routerPremium.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerHome);
app.use('/free', routerFree);
app.use('/premium', routerPremium)