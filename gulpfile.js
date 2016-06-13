var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('default', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});

