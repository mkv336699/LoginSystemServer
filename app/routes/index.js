var express = require('express');
var app = express();

app.use('/user', require('./users'));
app.use('/auth', require('./auth'));

module.exports = app;
