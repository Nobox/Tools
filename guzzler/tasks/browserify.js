
var browserify   = require('browserify'),
    coffeeify    = require('coffeeify'),
    gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    gulpif       = require('gulp-if'),
    gutil        = require('gulp-util'),
    stripDebug   = require('gulp-strip-debug'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    buffer       = require('vinyl-buffer'),
    source       = require('vinyl-source-stream'),
    watchify     = require('watchify'),
    argv         = require('yargs').argv,
    bundleLogger = require('../util/bundleLogger'),
    errorHandler = require('../util/errorHandler'),
    merge        = require('../util/merge'),
    cfg          = require('../config')
;

gulp.task('browserify', ['coffeelint'], function () {
    var requiredOptions = {
        cache: {},
        packageCache: {},
        fullPaths: true,
    };

    var options = merge(cfg.browserify, requiredOptions);

    var bundler = browserify(options);
    bundler.transform(coffeeify);

    function rebundle() {
        bundleLogger.start();

        return bundler.bundle()
            .on('error', errorHandler)
            .pipe(source('bundle.js'))
            .pipe(buffer())

            // Strip console, alert, and debugger statements from JavaScript code with strip-debug
            .pipe(gulpif(argv.production, stripDebug()))

            .pipe(sourcemaps.init({ loadMaps: true}))
                .pipe(gulpif(argv.production, uglify()))
                .pipe(gulpif(argv.production, concat('bundle.min.js')))
            .pipe(sourcemaps.write('./'))

            .pipe(gulp.dest(cfg.js))
            .on('end', bundleLogger.end);
    }

    if (global.isWatching) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
    }

    return rebundle();
});
