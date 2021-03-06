const gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      params = require('./params');

const OUTPUT_DIRNAME = params.OUTPUT_DIRNAME;

// browserifyの実行
gulp.task('browserify:js', function(){
  return browserify({
      entries: [OUTPUT_DIRNAME + '/js/entry.js'],
      paths: [OUTPUT_DIRNAME + '/js'],
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(OUTPUT_DIRNAME));
});
