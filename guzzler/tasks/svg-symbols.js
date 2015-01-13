var gulp         = require('gulp'),
    svgSymbols   = require('gulp-svg-symbols'),
    errorHandler = require('../util/errorHandler'),
    cfg          = require('../config')
;

/**
 * Generate SVG symbols file
 */

gulp.task('svg-symbols', function() {
    gulp.src([cfg.svgsrc + '/**/*.svg'])
        .pipe(svgSymbols(cfg.svgSymbolsOpts))
        .on('error', errorHandler)
        .pipe(gulp.dest(cfg.svg));
});
