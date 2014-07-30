var changed = require('gulp-changed')
var gulp = require('gulp')

gulp.task('config', function() {
  var dest = './www'
  return gulp.src('./config.xml')
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
})
