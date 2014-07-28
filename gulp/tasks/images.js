var changed = require('gulp-changed')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

gulp.task('images', function() {
  var dest = './www/img'
  return gulp
    .src('./src/img/**')
    .pipe(changed(dest)) // ignore unchanged files
    .pipe(imagemin()) // optimize
    .pipe(gulp.dest(dest))
})
