var browserify  = require('browserify')
var gulp = require('gulp')
var handleErrors = require('../util/handleErrors')
var source = require('vinyl-source-stream')

gulp.task('browserify', function() {
  return browserify({
    entries: ['./src/js/app.js'],
    extensions: ['.jsx'],
    paths: ['./node_modules','./src/js/']
  })
    .transform('reactify')
    .bundle()
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www'))
})
