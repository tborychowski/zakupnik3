const env = process.env.NODE_ENV;

const isTest = env === 'test';
const isDev = env === 'development';
const isProd = env === 'production';
let _config = null;

function getConfig () {
	if (!_config) {
		if (isProd) _config = require('../../.config-prod.js');
		else _config = require('../../.config-dev.js');
	}
	return _config;
}


function getFeat (name) {
	const cfg = getConfig();
	return cfg && cfg.features && cfg.features[name] || false;
}


module.exports = {
	env,
	isDev,
	isTest,
	isProd,
	getConfig,
	getFeat,
};
