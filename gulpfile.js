var gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  minifyInline = require('gulp-minify-inline'),
  inlinesource = require('gulp-inline-source');

/*gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});*/

/*gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});
gulp.task('inline-minify', function() {
  return gulp.src('src/index.html')
  .pipe(inline({
    base: 'public/',
    js: uglify,
    css: cleanCSS({compatibility: 'ie8'}),
    disabledTypes: ['svg', 'img'], // Only inline css files
  }))
  .pipe(htmlmin({collapseWhitespace: true}));
  .pipe(gulp.dest('./');
});*/


gulp.task('inlinesource', function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource())
        .pipe(minifyInline())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'));

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

gulp.task('default', ['inlinesource','minify-img','minify-img-views']);
