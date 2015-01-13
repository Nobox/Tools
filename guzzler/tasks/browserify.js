var browserify   = require('browserify'),
    coffeeify    = require('coffeeify'),
    gulp         = require('gulp'),
    _            = require('underscore'),
    source       = require('vinyl-source-stream'),
    watchify     = require('watchify'),
    bundleLogger = require('../util/bundleLogger'),
    errorHandler = require('../util/errorHandler'),
    cfg          = require('../config').browserify
;

var browserifyTask = function(cb, devMode) {

    var bundleQueue = cfg.bundlesConfig.length;

    var browserifyThis = function(bundleConfig) {

        if (devMode) {
            // Add watchify args and debug (sourcemaps) enabled
            _.extend(bundleConfig, watchify.args, { debug: true });

            // A watchify require/external bug that prevents proper recompiling,
            // so (for now) we'll ignore these options during development
            bundleConfig = _.omit(bundleConfig, ['external', 'require']);
        }

        var b = browserify(bundleConfig);
        b.transform(coffeeify);

        var bundle = function() {
            // Log when bundling starts
            bundleLogger.start(bundleConfig.outputName);

            return b
                .bundle()
                .on('error', errorHandler)

                // Use vinyl-source-stream to make the
                // stream gulp compatible. Specify the
                // desired output filename here.
                .pipe(source(bundleConfig.outputName))

                // Specify the output destination
                .pipe(gulp.dest(bundleConfig.dest))

                .on('end', reportFinished)
            ;
        };

        if (devMode) {
            // Wrap with watchify and rebundle on changes
            var w = watchify(b);
            w.on('update', bundle);

            bundleLogger.watch(bundleConfig.outputName)
        } else {
            // Sort out shared dependencies.
            // b.require exposes modules externally
            if (bundleConfig.require)
                b.require(bundleConfig.require)

            // b.external excludes modules from the bundle, and expects
            // they'll be available externally
            if (bundleConfig.external)
                b.external(bundleConfig.external)
        }

        var reportFinished = function reportFinished() {
            // Log when bundling completes
            bundleLogger.end(bundleConfig.outputName)

            if (bundleQueue) {
                bundleQueue--;

                if (bundleQueue === 0) {
                    // If queue is empty, tell gulp the task is complete.
                    // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
                    cb();
                }
            }
        }

        return bundle();
    }

    // Bundle with Browserify for each bundleConfig specified
    cfg.bundlesConfig.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
