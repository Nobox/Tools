var gulp = require('gulp'),
    browserifyTask = require('./browserify')
;

gulp.task('watchify', function(cb) {
    // Start browserify task with devMode === true
    browserifyTask(cb, true);
});
