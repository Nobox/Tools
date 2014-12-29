var gulp         = require('gulp'),
    svgSprites   = require('gulp-svg-sprites'),
    errorHandler = require('../util/errorHandler'),
    cfg          = require('../config')
;

/**
 * Generate SVG symbols file
 */

gulp.task('svg-sprite', function() {
    gulp.src([cfg.svgsrc + '/**/*.svg'])
        .pipe(svgSprites({
            mode: "symbols",
            preview: false
        }))
        .on('error', errorHandler)
        .pipe(gulp.dest(cfg.dist));
});
