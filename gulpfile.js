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
const isProd = require('minimist')(process.argv.slice(2)).prod;

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
	return gulp.src(['client/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});


gulp.task('js', ['eslint'], () => {
	return gulp.src(['client/index.js'])
		.pipe(webpack(require('./webpack.config.js'), null, wpErr))
		.pipe(isProd ? uglify() : noop())
		.pipe(gulp.dest('assets/'))
		.pipe(live());
});


gulp.task('styl', () => {
	return gulp.src(['client/index.styl', 'client/**/*.styl'])
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(stylus({ paths: ['src'], 'include css': true }))
		.pipe(isProd ? cssmin({ keepSpecialComments: 0 }) : noop())
		.pipe(concat('index.css'))
		.pipe(gulp.dest('assets'))
		.pipe(live());
});


gulp.task('default', [ 'js', 'styl' ]);

gulp.task('watch', ['default'], () => {
	if (isProd) return;
	live.listen();
	gulp.watch('client/**/*.styl', ['styl']);
	gulp.watch('client/**/*.js', ['js']);
	gulp.watch('client/**/*.html', ['js']);
});

