'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    eslint = require('gulp-eslint'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    es = require('event-stream'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require("babelify"),
    globby = require('globby'),
    config = require('./config');

gulp.task('js', ['js:lint', 'clean:js'], function(done) {
    globby([config.js.src.index, config.js.src.pages, config.js.src.setup, config.js.src.partials, config.js.src.global]).then(function(files) {
        var tasks = files.map(function(file) {
            return browserify(file, {debug:true, paths: ["assets/js"]})
                .transform(babelify.configure({presets:["es2015"]}))
                .bundle()
                .pipe(source(file.replace(config.js.src.root, '')))
                .pipe(buffer())
                .pipe(gulpif(!config.production, sourcemaps.init({loadMaps: true})))
                    .pipe(uglify())
                    .on('error', gutil.log)
                .pipe(gulpif(!config.production, sourcemaps.write('./')))
                .pipe(gulp.dest(config.js.dest));
        });

        es.merge(tasks).on('end', done);
    });   
});

gulp.task('js-watch', function () {
    gulp.watch(config.js.src.all, ['js']);
});


gulp.task('js:lint', function() {
    return gulp.src(config.js.src.all)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
