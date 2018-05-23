const {readFileSync} = require('fs');
const path = require('path');
const spdy = require('spdy');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./lib/passport');
const session = require('./lib/session');
const app = express();

//FIXME: remove for production!
const DEV = true;

app.use(session);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


function sendView (res, view) {
	res.sendFile(view, { root: path.join(__dirname, '..', 'public') });
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
app.use('/api/', isApiAuthenticated, require('./api/'));
app.use('/', isAuthenticated, express.static(path.join(__dirname, '..', 'public')));



// old - expressjs way
// app.listen(3000, () => console.log('Server started.'));


const key = readFileSync('./cert.key');
const cert = readFileSync('./cert.crt');
spdy
	.createServer({key, cert}, app)
	.listen(3000, err => {
		if (err) throw new Error(err);
		console.log('https://localhost:3000');
	});
