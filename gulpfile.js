var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    slim = require('gulp-slim'),
    sourcemaps = require('gulp-sourcemaps');

/**
 * Default Task
 */
gulp.task('default', ['build', 'serve']);

/**
 * Start simple webserver
 */
gulp.task('serve', function () {
  connect.server({
    root : 'public',
    port : 8888,
    livereload : true
  });
});

/**
 * Build files
 */
gulp.task('build', function () {
  return gulp.src([
      'dev/app/dest/prod/*/**'
    ])
    .pipe(gulp.dest('./public'));
});
