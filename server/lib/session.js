const session = require('cookie-session');
const util = require('./util');
const config = require('./util').getConfig();

//openssl rand -base64 32
const secret = 'fX5uuWQMpb/z2+yYGfBvfC/ovgpNpPf/7KNUznBGwpg=';

const sessionCfg = {
	name: 'zakupnik',
	secret: config.secret || secret,
	secure: util.isProd,
	sameSite: true,
	maxAge: 3600000 * 24 * 30 /* 30 days */
};


module.exports = session(sessionCfg);
