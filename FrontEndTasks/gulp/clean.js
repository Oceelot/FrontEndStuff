'use strict';

var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

gulp.task('clean', ['clean:js', 'clean:styles', 'clean:images','clean:videos'], function() {
    return del([config.clean.all], { force: true });
});

gulp.task('clean:js', function() {
    return del(config.clean.js, { force: true });
});

gulp.task('clean:styles', function() {
    return del(config.clean.styles, { force: true });
});

gulp.task('clean:images', function() {
    return del([
        config.clean.assets.images["content-images"], 
        config.clean.assets.images["styles-images"],
        config.clean.assets.images["favicon"]
    ], { force: true });
});

gulp.task('clean:videos', function() {
    return del([config.clean.assets.videos], { force: true });
});
