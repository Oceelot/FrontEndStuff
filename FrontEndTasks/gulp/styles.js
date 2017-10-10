'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./config');

gulp.task('styles', ['clean:styles'], function() {
    return gulp.src(config.styles.src.build)
        .pipe(gulpif(!config.production, sourcemaps.init()))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssnano({safe:true}))
        .pipe(gulpif(!config.production, sourcemaps.write('./')))
        .pipe(gulp.dest(config.styles.dest));
});