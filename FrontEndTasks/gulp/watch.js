'use strict';

var gulp = require('gulp'),
    config = require('./config');

gulp.task('watch', function() {
    gulp.watch(config.styles.src.all, ['styles', 'assets:images']);
    gulp.watch(config.js.src.all, ['js']);
    gulp.watch(config.assets.videos.src, ['assets:videos']);
    gulp.watch([
        config.assets.images.src["styles-images"],
        config.assets.images.src["content-images"],
        config.assets.images.src["favicon"]
    ], ['assets:images']);
});
