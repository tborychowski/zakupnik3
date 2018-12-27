const { series, parallel, src, dest, watch } = require('gulp');
const livereload = require('gulp-livereload');
const env = require('gulp-env');
const isProd = require('minimist')(process.argv.slice(2)).prod;
const PUBLIC_PATH = 'public/';

env.set({ NODE_TLS_REJECT_UNAUTHORIZED: 0 });
env.set({ NODE_ENV: isProd ? 'production' : 'development' });


function webpackLogger (err) {
	const chalk = require('chalk');
	let time = new Date().toTimeString().substr(0,8);
	let message = 'Finished ' + chalk.green('webpack') + ' build';
	if (err) { message = chalk.red(err); time = chalk.red(time); }
	else time = chalk.grey(time);
	console.log(`[${time}] ${message}`); /* eslint no-console: 0 */
}


let serverStarted = false;
function server (done) {
	const nodemon = require('gulp-nodemon');
	return nodemon({ script: './server/index.js', watch: ['./server'], ext: 'js html' })
		.on('start', () => {
			if (serverStarted) return;
			serverStarted = true;
			setTimeout(done, 500);
		});
}


function eslint () {
	const gulpEslint = require('gulp-eslint');
	return src(['client/**/*.js', 'server/**/*.js'])
		.pipe(gulpEslint())
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.failAfterError());
}

function assets () {
	return src(['assets/*.*']).pipe(dest(`${PUBLIC_PATH}`));
}



function styl () {
	const cssmin = require('gulp-clean-css');
	const sourcemaps = require('gulp-sourcemaps');
	const concat = require('gulp-concat');
	const stylus = require('gulp-stylus');
	const noop = require('through2').obj;

	return src(['client/index.styl', 'client/**/*.styl'])
		.pipe(isProd ? noop() : sourcemaps.init())
		.pipe(stylus({ paths: ['client'], 'include css': true }))
		.pipe(isProd ? cssmin({ keepSpecialComments: 0 }) : noop())
		.pipe(concat('app.css'))
		.pipe(isProd ? noop() : sourcemaps.write())
		.pipe(dest(PUBLIC_PATH))
		.pipe(livereload());
}


function js () {
	const path = require('path');
	const webpack = require('webpack');
	const webpackStream = require('webpack-stream');
	const webpackConfig = {
		entry: { index: './client/index.js' },
		output: {
			filename: 'app.js',
			path: path.join(__dirname, 'public'),
			publicPath: './public/',
		},
		resolve: { extensions: ['.js', '.json', '.html'] },
		stats: 'normal',	// minimal
		module: {
			rules: [
				{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
				{
					test: /\.html$/,
					exclude: /node_modules/,
					use: { loader: 'svelte-loader', options: { css: false } },
				},
			]
		}
	};

	if (!isProd) {
		webpackConfig.devtool = 'inline-source-map';
		webpackConfig.mode = 'development';
	}
	else {
		const MinifyPlugin = require('babel-minify-webpack-plugin');
		webpackConfig.plugins = [ new MinifyPlugin() ];
	}

	return src(['client/index.js'])
		.pipe(webpackStream(webpackConfig, webpack, webpackLogger))
		.on('error', function () { this.emit('end'); })
		.pipe(dest(PUBLIC_PATH))
		.pipe(livereload());
}



function testServer (cb) {
	env.set({ NODE_ENV: 'test' });
	server(cb);
}

function runTests (cb) {
	const mocha = require('gulp-mocha');
	return src(['./test/**/*.spec.js'], { read: false })
		.pipe(mocha({ reporter: 'list' }))
		.on('error', () => { cb(); process.exit(1); })
		.on('end', () => { cb(); process.exit(0); });
}


function watchTask () {
	if (isProd) return;
	livereload.listen();
	watch('client/**/*.styl', styl);
	watch('client/**/*.js', js);
	watch('client/**/*.html', js);
	watch('assets/**/*.*', assets);
}

const defaultTask = parallel(assets, styl, eslint, js);

exports.styl = styl;
exports.eslint = eslint;
exports.assets = assets;
exports.js = js;
exports.server = server;
exports.test = series(testServer, runTests);

exports.default = defaultTask;
exports.watch = series(defaultTask, watchTask);
