const gulp = require('gulp');
const cssmin = require('gulp-clean-css');
const webpack = require('webpack-stream');
const concat = require('gulp-concat');
const stylus = require('gulp-stylus');
const live = require('gulp-livereload');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const noop = require('through2').obj;
const sourcemaps = require('gulp-sourcemaps');
const isProd = require('minimist')(process.argv.slice(2)).prod;
const webpackConfig = require('./webpack.config.js');
const PUBLIC_PATH = 'public/';

const wpErr = (err, stats) => {
	if (err) notify.onError('Error: ' + err);
	err = stats.compilation.errors;
	if (err.length) notify.onError('Error: ' + err[0].message);
};

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
		.pipe(live());
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
		.pipe(live());
});


gulp.task('default', [ 'js', 'styl', 'fonts', 'html', 'eslint' ]);

gulp.task('watch', ['default'], () => {
	if (isProd) return;
	live.listen();
	gulp.watch('client/**/*.styl', ['styl']);
	gulp.watch('client/**/*.js', ['js']);
	gulp.watch('client/**/*.html', ['js']);
	gulp.watch('client/*.html', ['html']);
});

