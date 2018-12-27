const gulp = require('gulp');
const livereload = require('gulp-livereload');
const env = require('gulp-env');
const isProd = require('minimist')(process.argv.slice(2)).prod;
const PUBLIC_PATH = 'public/';


function webpackLogger (err) {
	const chalk = require('chalk');
	let time = new Date().toTimeString().substr(0,8);
	let message = 'Finished ' + chalk.green('webpack') + ' build';
	if (err) { message = chalk.red(err); time = chalk.red(time); }
	else time = chalk.grey(time);
	console.log(`[${time}] ${message}`); /* eslint no-console: 0 */
}


let serverStarted = false;
function startServer (done) {
	const nodemon = require('gulp-nodemon');
	return nodemon({ script: './server/index.js', watch: ['./server'], ext: 'js html' })
		.on('start', () => {
			if (serverStarted) return;
			serverStarted = true;
			setTimeout(done, 500);
		});
}


env.set({ NODE_TLS_REJECT_UNAUTHORIZED: 0 });
env.set({ NODE_ENV: isProd ? 'production' : 'development' });


gulp.task('help', () => {
	const tasks = '  ' + Object.keys(gulp.tasks).sort().join('\n  ');
	console.log(`\nAvailable tasks:\n${tasks}\n`);
});


gulp.task('eslint', () => {
	const eslint = require('gulp-eslint');
	return gulp.src(['client/**/*.js', 'server/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});


gulp.task('assets', () => {
	gulp.src(['assets/*.*']).pipe(gulp.dest(`${PUBLIC_PATH}`));
});


gulp.task('js', ['eslint'], () => {
	const path = require('path');
	const webpack = require('webpack');
	const webpackStream = require('webpack-stream');
	const webpackConfig = {
		// devtool: 'inline-source-map',
		// mode: 'development',
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

	if (!isProd) webpackConfig.devtool = 'inline-source-map';
	else {
		const MinifyPlugin = require('babel-minify-webpack-plugin');
		webpackConfig.plugins = [ new MinifyPlugin() ];
	}

	// gulp.src(['client/worker.js']).pipe(gulp.dest(`${PUBLIC_PATH}`));

	return gulp.src(['client/index.js'])
		.pipe(webpackStream(webpackConfig, webpack, webpackLogger))
		.on('error', function () { this.emit('end'); })
		.pipe(gulp.dest(PUBLIC_PATH))
		.pipe(livereload());

});


gulp.task('styl', () => {
	const cssmin = require('gulp-clean-css');
	const sourcemaps = require('gulp-sourcemaps');
	const concat = require('gulp-concat');
	const stylus = require('gulp-stylus');
	const noop = require('through2').obj;

	return gulp.src(['client/index.styl', 'client/**/*.styl'])
		.pipe(isProd ? noop() : sourcemaps.init())
		.pipe(stylus({ paths: ['client'], 'include css': true }))
		.pipe(isProd ? cssmin({ keepSpecialComments: 0 }) : noop())
		.pipe(concat('app.css'))
		.pipe(isProd ? noop() : sourcemaps.write())
		.pipe(gulp.dest(PUBLIC_PATH))
		.pipe(livereload());
});



gulp.task('test-server', done => {
	env.set({ NODE_ENV: 'test' });
	startServer(done);
});


gulp.task('server', done => {
	startServer(done);
});


gulp.task('test', ['test-server'], () => {
	const mocha = require('gulp-mocha');
	return gulp
		.src(['./test/**/*.spec.js'], { read: false })
		.pipe(mocha({ reporter: 'list' }))
		.on('error', () => process.exit(1))
		.on('end', () => process.exit(0));
});


gulp.task('watch', ['default'], () => {
	if (isProd) return;
	livereload.listen();
	gulp.watch('client/**/*.styl', ['styl']);
	gulp.watch('client/**/*.js', ['js']);
	gulp.watch('client/**/*.html', ['js']);
	gulp.watch('assets/**/*.*', ['assets']);
});


gulp.task('default', [ 'js', 'styl', 'assets', 'eslint' ]);
