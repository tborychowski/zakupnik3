const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./lib/passport');
const session = require('./lib/session');
const {isDev, isTest} = require('./lib/util');
const app = express();
const api = require('./api/');

function sendView (res, view) {
	res.sendFile(view, { root: __dirname });
}

function isAuthenticated (req, res, next) {
	if (req.user) return next();
	res.redirect('/login');
}

function isApiAuthenticated (req, res, next) {
	if (req.user || isTest) return next();
	res.status(401).json({ status: '401' });
}

function rootPath (req, res) {
	if (req.path.substr(1)) return res.redirect('/');
	sendView(res, 'index.html');
}

if (isDev) app.use(require('connect-livereload')());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '..', 'public')));

if (!process.env.AUTH) {
	app.use('/api/', api);
	app.use('/', rootPath);
}
else {
	app.use(session);
	app.use(passport.initialize());
	app.use(passport.session());

	app.get('/login', (req, res) => { req.logout(); sendView(res, 'login.html'); });
	app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });
	app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
	app.use('/api/', isApiAuthenticated, api);
	app.use('/', isAuthenticated, rootPath);
}


module.exports = app;
