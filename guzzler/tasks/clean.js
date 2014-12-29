var gulp = require('gulp'),
    del  = require('del'),
    cfg  = require('../config')
;


gulp.task('clean', function (cb) {
    del([
        cfg.css,
        cfg.js,
        cfg.img,
        cfg.rev.manifest.dest + '/' + cfg.rev.manifest.name
    ], cb);
});
