'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');


gulp.task('default', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});


gulp.task('gulp-jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./lib/*.jade')
      .pipe(jade({
        locals: YOUR_LOCALS
      }))
      .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


