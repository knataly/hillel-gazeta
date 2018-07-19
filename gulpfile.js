var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', ['less']);

gulp.task('less', function () {
  gulp.src('./src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css'))
  }
);

gulp.task('watch', ['less'], function () {
  return watch('src/less/**/*.less', function () {
    gulp.start('less');
  })
});
