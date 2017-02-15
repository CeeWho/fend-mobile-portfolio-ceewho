var gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  minifyInline = require('gulp-minify-inline'),
  inlinesource = require('gulp-inline-source');



gulp.task('min-linesource', function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource())
        .pipe(minifyInline())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'));

});

gulp.task('minify-img', function() {
    gulp.src('src/img/*')
        .pipe(webp())
        .pipe(gulp.dest('img/'))
});
gulp.task('minify-img-views', function() {
    gulp.src('src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('views/images/'))
});

gulp.task('default', ['min-linesource','minify-img','minify-img-views']);
