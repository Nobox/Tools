var gulp       = require('gulp'),
    coffeelint = require('gulp-coffeelint'),
    cfg        = require('../config')
;

/**
 * CoffeeLint task
 */

gulp.task('coffeelint', function() {
    gulp.src(['./' + cfg.scripts + '/**/*.coffee'])
        .pipe(coffeelint(cfg.scripts + '/coffeelint.json'))
        .pipe(coffeelint.reporter());
});
