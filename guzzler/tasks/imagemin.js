var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    bytediff  = require('gulp-bytediff'),
    pngquant  = require('imagemin-pngquant'),
    optipng   = require('imagemin-optipng'),
    mozjpeg   = require('imagemin-mozjpeg'),
    cfg       = require('../config')
;

/**
 * Optimize images
 *
 * 1. Only pass through new images or those that have changed
 *    since the last task run.
 * 2. Log original images file size
 * 3. Optimize PNGs with pngquant - http://pngquant.org
 * 4. Optimize PNGs with optipng - http://optipng.sourceforge.net/
 * 5. Optimize JPGs with mozjpeg - https://github.com/mozilla/mozjpeg
 * 6. Log optimized images file size
 * 7. Place images in destination folder
 */

gulp.task('imagemin', function() {
    return gulp.src([cfg.imgsrc + "/**/*.{png,jpg,jpeg,gif}"])
        .pipe(changed(cfg.img)) /* [1] */
        .pipe(bytediff.start()) /* [2] */
        .pipe(pngquant({ quality: '65-80', speed: 4 })()) /* [3] */
        .pipe(optipng({ optimizationLevel: 3 })()) /* [4] */
        .pipe(mozjpeg()()) /* [5] */
        .pipe(bytediff.stop()) /* [6] */
        .pipe(gulp.dest(cfg.img)); /* [7] */
});
