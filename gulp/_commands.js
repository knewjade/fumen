const gulp = require('gulp'),
      runsequence = require('run-sequence');

gulp.task('build', function(callback) {
  runsequence(
    'clean:output',
    'compile:ts',
    'copy:html',
    'copy:css',
    'copy:img',
    'copy:favicons',
    'browserify:js',
    'clean:build.post',
    callback
  );
});
