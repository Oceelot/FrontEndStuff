'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    es = require('event-stream'),
    config = require('./config');

gulp.task('assets', ['assets:images', 'assets:videos']);

gulp.task('assets:images', ['clean:images'], function() {
    var paths = config.assets.images; 

    return es.merge([
        doMinification(paths.src["content-images"], paths.dest["content-images"]),
        doMinification(paths.src["styles-images"], paths.dest["styles-images"]),
        doMinification(paths.src["favicon"], paths.dest["favicon"]),
    ]);
});

gulp.task('assets:videos', ['clean:videos'], function() {
    var paths = config.assets.videos;
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dest));
});

function doMinification(src, dest) {
    return gulp.src(src)
        .pipe(gulpif(config.production, imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        })))
        .pipe(gulp.dest(dest));
}