const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./server/lib/passport');
const session = require('./server/lib/session');
const app = express();

const DEV = app.get('env') !== 'production';

if (DEV) app.use(require('connect-livereload')());

app.use(session);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());



function sendView (res, view) {
	res.sendFile(view, { root: path.join(__dirname, 'server') });
}

function isAuthenticated (req, res, next) {
	if (req.user || DEV) return next();
	res.redirect('/login');
}

function isApiAuthenticated (req, res, next) {
	if (req.user || DEV) return next();
	res.status(401).json({ status: '401' });
}

app.get('/login', (req, res) => sendView(res, 'login.html'));
app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
app.use('/api/', isApiAuthenticated, require('./server/api/'));
if (DEV) app.use('/', isAuthenticated, express.static(path.join(__dirname, 'public')));
app.use('/', isAuthenticated, (req, res) => sendView(res, 'index.html'));



// old - expressjs way
app.listen(3000, () => console.log('Server started.'));
