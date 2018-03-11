const path = require('path');
const fs = require('fs');
const session = require('express-session');


//openssl rand -base64 32
const secretFile = path.join(__dirname, '..', '.sessionsecret');
const secret = fs.readFileSync(secretFile, 'utf8') || 'super secret shit';

const sessionCfg = {
	secret,
	resave: true,
	saveUninitialized: true,
	cookie: { expires: 3600000 * 24 * 30 /* 30 days */ }
};


module.exports = session(sessionCfg);
