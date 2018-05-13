const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const cssmin = require('gulp-clean-css');
const webpack = require('webpack-stream');
const concat = require('gulp-concat');
const stylus = require('gulp-stylus');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');
const env = require('gulp-env');
const nodemon = require('gulp-nodemon');
const noop = require('through2').obj;
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const isProd = require('minimist')(process.argv.slice(2)).prod;
const webpackConfig = require('./webpack.config.js');
const PUBLIC_PATH = 'public/';

const wpErr = (err, stats) => {
	if (err) notify.onError('Error: ' + err);
	err = stats.compilation.errors;
	if (err.length) notify.onError('Error: ' + err[0].message);
};

let serverStarted = false;
const startServer = done =>
	nodemon({ script: './server/index.js', watch: ['./server'], ext: 'js', })
		.on('start', () => {
			if (serverStarted) return;
			serverStarted = true;
			setTimeout(done, 500);
		});


env.set({ NODE_TLS_REJECT_UNAUTHORIZED: 0 });


gulp.task('help', () => {
	const tasks = '  ' + Object.keys(gulp.tasks).sort().join('\n  ');
	console.log(`\nAvailable tasks:\n${tasks}\n`);
});


gulp.task('eslint', () => {
	return gulp.src(['client/**/*.js', 'server/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});


gulp.task('fonts', () => {
	const pth = 'node_modules/ionicons/dist/';
	const out = `${PUBLIC_PATH}fonts/`;
	gulp.src([pth + 'css/ionicons.min.css']).pipe(gulp.dest(out));
	gulp.src([pth + 'fonts/*.*']).pipe(gulp.dest(out));
});


gulp.task('html', () => {
	gulp.src(['client/*.html']).pipe(gulp.dest(PUBLIC_PATH));
});


gulp.task('js', ['eslint'], () => {
	return gulp.src(['client/index.js'])
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(webpack(webpackConfig, null, wpErr))
		.pipe(isProd ? uglify() : noop())
		.pipe(gulp.dest(PUBLIC_PATH))
		.pipe(livereload());
});


gulp.task('styl', () => {
	return gulp.src(['client/index.styl', 'client/**/*.styl'])
		.pipe(isProd ? noop() : sourcemaps.init())
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(stylus({ paths: ['client', 'client/core'], 'include css': true }))
		.pipe(isProd ? cssmin({ keepSpecialComments: 0 }) : noop())
		.pipe(concat('index.css'))
		.pipe(isProd ? noop() : sourcemaps.write())
		.pipe(gulp.dest(PUBLIC_PATH))
		.pipe(livereload());
});



gulp.task('test-server', done => {
	env.set({ NODE_ENV: 'test' });
	startServer(done);
});


gulp.task('server', done => {
	env.set({ NODE_ENV: 'development' });
	startServer(done);
});


gulp.task('test', ['test-server'], () => {
	return gulp
		.src(['./test/**/*.spec.js'], { read: false })
		.pipe(mocha({ reporter: 'list' }))
		.on('error', () => process.exit(1))
		.on('end', () => process.exit(0));
});


gulp.task('watch', ['default'], () => {
	if (isProd) return;
	livereload.listen({
		key: fs.readFileSync(path.join(__dirname, 'server', 'localhost.key'), 'utf-8'),
		cert: fs.readFileSync(path.join(__dirname, 'server', 'localhost.crt'), 'utf-8'),
	});
	gulp.watch('client/**/*.styl', ['styl']);
	gulp.watch('client/**/*.js', ['js']);
	gulp.watch('client/**/*.html', ['js']);
	gulp.watch('client/*.html', ['html']);
});


gulp.task('default', [ 'js', 'styl', 'fonts', 'html', 'eslint' ]);
