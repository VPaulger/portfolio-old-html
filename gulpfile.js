var gulp = require('gulp');

var minify = require('gulp-babel-minify'), 
	rename = require('gulp-rename'), 
	browserSync = require('browser-sync'),
	jsValidate = require('gulp-jsvalidate'),
	clean = require('gulp-clean'),
	sass = require('gulp-sass')
	cleanCSS = require('gulp-clean-css');

gulp.task('scripts', ['cleanJS','lint'], function() {
	return gulp.src('scripts/*.js')
	.pipe(minify())
	.pipe(rename({extname: '.min.js'}))
	.pipe(gulp.dest('build/js'));
});

gulp.task('watch', ['browser-sync', 'default'], function() {
	gulp.watch(['scripts/*.js', 'styles/*.scss'], ['scripts', 'styles']);
});

gulp.task('browser-sync', function() {
	browserSync.init(['scripts/*.js', 'styles/*.scss'],{
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('scsstocss', function() {
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('build/styles'));
});

gulp.task('styles', ['scsstocss', 'cleanCSS'], function() {
	return gulp.src('build/styles/*.css')
	.pipe(cleanCSS())
	.pipe(rename({extname: '.min.css'}))
	.pipe(gulp.dest('build/styles'));
})

gulp.task('default',  ['styles', 'scripts'], function() {

});


gulp.task('lint', function() {
	gulp.src('scripts/*.js')
	.pipe(jsValidate())
});

gulp.task('clean', function() {
	return gulp.src('build/**/*.*').pipe(clean());
});

gulp.task('cleanJS', function() {
	return gulp.src('build/**/*.js').pipe(clean());
});

gulp.task('cleanCSS', function() {
	return gulp.src('build/**/*.css').pipe(clean());
});