'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', ['clean'], function(cb) {
    runSequence('clean', ['styles', 'assets', 'js']);
});
