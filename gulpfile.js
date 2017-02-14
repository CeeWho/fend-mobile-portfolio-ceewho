var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('minify-img', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
});
gulp.task('minify-img-views', function() {
    gulp.src('src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('views/images/'))
});

gulp.task('default', ['minify','minify-css','minify-img','minify-img-views']);
