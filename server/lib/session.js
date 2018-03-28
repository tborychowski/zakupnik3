const session = require('express-session');


//openssl rand -base64 32
const secret = 'fX5uuWQMpb/z2+yYGfBvfC/ovgpNpPf/7KNUznBGwpg=';

const sessionCfg = {
	secret,
	resave: true,
	saveUninitialized: true,
	cookie: { expires: 3600000 * 24 * 30 /* 30 days */ }
};


module.exports = session(sessionCfg);
