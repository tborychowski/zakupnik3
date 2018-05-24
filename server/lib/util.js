const env = process.env.NODE_ENV;

const isTest = env === 'test';
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
	env,
	isDev,
	isTest,
	isProd,
};
