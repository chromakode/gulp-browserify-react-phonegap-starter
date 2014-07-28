var changed = require('gulp-changed')
var gulp = require('gulp')

gulp.task('html', function() {
  var dest = './www'
  return gulp.src('./src/index.html')
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
})
