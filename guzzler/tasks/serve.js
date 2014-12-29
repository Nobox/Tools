var gulp = require('gulp'),
    runSequence = require('run-sequence')
;

/**
 * Serve task for development
 */

gulp.task('serve', function (cb) {
    runSequence('clean',
        ['browserify', 'styles', 'imagemin', 'svg-sprite'],
        'watch',
        cb);
});
