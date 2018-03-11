const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./lib/passport');
const session = require('./lib/session');
const app = express();

const viewCfg = { root: path.join(__dirname, 'views') };

app.use(session);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


function isAuthenticated (req, res, next) {
	if (req.user) return next();
	res.redirect('/login');
}

function isApiAuthenticated (req, res, next) {
	if (req.user) return next();
	res.status(401).json({ status: '401' });
}

app.use('/api/', isApiAuthenticated, require('./api/'));

app.get('/', isAuthenticated, (req, res) => res.sendFile('index.html', viewCfg));
app.use('/assets', isAuthenticated, express.static(path.join(__dirname, '..', 'assets')));


app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });
app.get('/login', (req, res) => res.sendFile('login.html', viewCfg));
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));


app.listen(3000, () => console.log('Server started.'));
