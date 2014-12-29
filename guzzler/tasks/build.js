var gulp         = require('gulp'),
    runSequence  = require('run-sequence')
;



/**
 * Build task
 */
gulp.task('build', function(cb) {
    runSequence('clean',
        ['browserify', 'styles', 'imagemin', 'svg-sprite'],
        'rev',
        cb);
});
