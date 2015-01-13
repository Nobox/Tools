/**
 * The Watchers
 *
 * This task will watch for changes on several types of files
 * and run their corresponding tasks accordingly.
 *
 * Watchers:
 *   browserify  - uses watchify to watch for JS changes
 *   sass        - watches for changes on stylesheets src folder
 *   svg-sprites - watches for SVG file changes
 *   imagemin    - watches for modified images
 *
 */

var gulp     = require('gulp'),
    watch    = require('gulp-watch'),
    cfg      = require('../config'),
    watchify = require('./browserify')
;

gulp.task('watch', ['watchify'], function(cb) {
    // Stylesheets
    watch([cfg.styles + '/**/*.scss'],
        {
            name: 'Sass'
        },
        function (files, cb) {
            gulp.start('styles', cb);
        }
    );

    // SVGs
    watch([cfg.svgsrc + '*/**.svg'],
        {
            name: 'SVGs'
        },
        function (files, cb) {
            gulp.start('svg-sprite', cb);
        }
    );

    // Images
    watch([cfg.imgsrc, cfg.imgsrc + '**/*'],
        {
            name: 'Images'
        },
        function (files, cb) {
            gulp.start('imagemin', cb);
        }
    );
});
