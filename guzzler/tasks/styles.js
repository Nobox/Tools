var gulp         = require('gulp'),
    bytediff     = require('gulp-bytediff'),
    changed      = require('gulp-changed'),
    postcss      = require('gulp-postcss'),
    rev          = require('gulp-rev'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    errorHandler = require('../util/errorHandler'),
    merge        = require('../util/merge'),
    cfg          = require('../config')
;


/**
 * Node Sass options
 */

var defaultSassOpts = {
    // default options
}

var sassOpts = merge(defaultSassOpts, cfg.sass);



/**
 * PostCSS processors
 */

var defaultPostCSS = [
    require('autoprefixer-core')({
        browsers: ['last 2 versions', 'Explorer 9']
    })
];

var processors = merge(defaultPostCSS, cfg.postcss);



/**
 * Stylesheets task
 *
 * 1. Compile SASS files to CSS though node-sass and
 *    generate sourcemaps.
 * 2. Load previously generated sourcemaps and pass
 *    CSS through PostCSS postprocessors.
 * 3. Write CSS files to destination directory.
 */

gulp.task('styles', function () {

    return gulp.src([cfg.styles + '/**/*.scss'])
        .pipe(changed(cfg.css, { extension: '.css' }))

        /* [1] */
        .pipe(sourcemaps.init())
            .pipe(sass(sassOpts))
            .on('error', errorHandler)
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: '.'
        }))

        /* [2] */
        .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(postcss(cfg.postcss))
            .on('error', errorHandler)
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: cfg.styles
        }))

        /* [3] */
        .pipe(gulp.dest(cfg.css))

});
