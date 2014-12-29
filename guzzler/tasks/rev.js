var gulp         = require('gulp'),
    rev          = require('gulp-rev'),
    revReplace   = require('gulp-rev-replace'),
    path         = require('path'),
    cfg          = require('../config')
;

/**
 * Revisioning
 *
 * Cache busting workflow.
 * 1. Rename asset filenames by appending content hashes.
 * 2. Replace any ocurrence of original file names in
 *    CSS/JS files to new ones.
 * 3. Generate asset manifest.
 */

gulp.task('rev', function() {
    return gulp.src(cfg.rev.assets, { base: path.join(process.cwd(), cfg.dist) })
        .pipe(rev()) // [1]
        .pipe(revReplace()) // [2]
        .pipe(gulp.dest(cfg.dist))
        .pipe(rev.manifest({ path: cfg.rev.manifest.name })) // [3]
        .pipe(gulp.dest(cfg.rev.manifest.dest));
});
