var gulp = require('gulp')

gulp.task('watch', function() {
  gulp.watch('./src/js/**', ['browserify'])
  gulp.watch('./src/img/**', ['images'])
  gulp.watch('./src/css/**', ['styles'])
  gulp.watch('./src/index.html', ['html'])
})
