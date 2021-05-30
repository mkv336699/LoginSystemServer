const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('../config');
const http = require('http');
const mysql = require('mysql');

const app = express();

/** Set configurations */
app.config = config

app.db = mysql.createConnection(app.config.db);

app.db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

var enableCORS = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,authToken,authorization,Access-Control-Allow-Origin,');
	next();
};
app.use(enableCORS);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** Mount routes */
app.use(require('./routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

/** Create http server */
app.server = http.createServer()
app.listen(app.config.port, () => {
	console.log(`Server listening on ${app.config.host}:${app.config.port}`)
});

module.exports = app;
