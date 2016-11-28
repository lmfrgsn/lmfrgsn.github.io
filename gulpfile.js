var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');

/* Compile LESS */
gulp.task('compile-less', function () {
  gulp.src('assets/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('assets/css/'));
});

/* Watch for changes */
gulp.task('watch-less', function () {
  gulp.watch('assets/**/*.less', ['compile-less']);
});

// Minify CSS
gulp.task('minify-css', function () {
  gulp.src('assets/css/style.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'));
});

/* `gulp` */
gulp.task('default', ['compile-less', 'watch-less']);

/* `gulp min` */
gulp.task('min', ['minify-css']);