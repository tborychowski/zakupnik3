const fs = require('fs');
const path = require('path');
const spdy = require('spdy');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./lib/passport');
const session = require('./lib/session');
const app = express();

app.use(session);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


function sendView (res, view) {
	res.sendFile(view, { root: path.join(__dirname, '..', 'client' ) });
}

function isAuthenticated (req, res, next) {
	if (req.user) return next();
	res.redirect('/login');
}

function isApiAuthenticated (req, res, next) {
	if (req.user) return next();
	res.status(401).json({ status: '401' });
}

app.use('/api/', isApiAuthenticated, require('./api/'));

app.get('/', (req, res) => sendView(res, 'index.html'));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/client', express.static(path.join(__dirname, '..', 'client')));

// app.get('/', isAuthenticated, (req, res) => sendView(res, 'index.html'));
// app.use('/assets', isAuthenticated, express.static(path.join(__dirname, '..', 'assets')));


app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });
app.get('/login', (req, res) => sendView(res, 'login.html'));
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));


// app.listen(3000, () => console.log('Server started.'));


// openssl req -x509 -out localhost.crt -keyout localhost.key \
//   -newkey rsa:2048 -nodes -sha256 \
//   -subj '/CN=localhost' -extensions EXT -config <( \
//    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

const key = fs.readFileSync('./server/localhost.key');
const cert = fs.readFileSync('./server/localhost.crt');


spdy
	.createServer({key, cert}, app)
	.listen(3000, err => {
		if (err) throw new Error(err);
		console.log('https://localhost:3000');
	});
