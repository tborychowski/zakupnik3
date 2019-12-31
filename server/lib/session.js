const session = require('cookie-session');

//openssl rand -base64 32
const secret = 'fX5uuWQMpb/z2+yYGfBvfC/ovgpNpPf/7KNUznBGwpg=';

const sessionCfg = {
	name: 'zakupnik',
	secret: process.env.SESSION_SECRET || secret,
	maxAge: 3600000 * 24 * 30 /* 30 days */
};


module.exports = session(sessionCfg);
