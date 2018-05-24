const env = process.env.NODE_ENV;

const isTest = env === 'test';
const isDev = env === 'development';
const isProd = env === 'production';

function getConfig () {
	if (isProd) return require('../../.config-prod.js');
	return require('../../.config-dev.js');
}

module.exports = {
	env,
	isDev,
	isTest,
	isProd,
	getConfig,
};
