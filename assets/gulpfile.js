const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require("gulp-babel-minify");
const sass = require('gulp-sass');

//message to check if gulp is functioning
gulp.task('message', function(){
  return console.log("We got gulp");
});

// //copy all html files
// gulp.task('copyHtml', function(){
//   gulp.src('index.html')
//   .pipe(gulp.dest(''));
// });

//optomize images
gulp.task('assetMin', () =>
  gulp.src('assets/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/assets'))
);

//minify files for ES6
gulp.task("minify", () =>
  gulp.src("js/*.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("build/js"))
);

//compile sass
gulp.task('sass', function(){
  gulp.src('sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css'));
});

//create a default task to perform all tasks at once
gulp.task('default', ['message', 'assetMin', 'minify', 'sass']);
// 'copyHtml',

//create a watch task!!!!
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['minify']);
  gulp.watch('assets/*', ['assetMin']);
  gulp.watch('sass/*.scss', ['sass']);
  // gulp.watch('index.html', ['copyHtml']);
});