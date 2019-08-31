'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./database/database'),
    config = require('./config');
var expressJwt=require('express-jwt');



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

if (global.SQLpool === undefined) {
    global.SQLpool = db.createPool();
}



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    res.setHeader('res.setHeaderAccess-Control-Max-Age', '60');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

//app.use(expressJwt({secret:config.secret}).unless({path: ["/api/v1/sesion/login"]}));

// Routes

module.exports = app;
