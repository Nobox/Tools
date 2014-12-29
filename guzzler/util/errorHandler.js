var gutil = require('gulp-util');

module.exports = function (err) {
    gutil.log(gutil.colors.red(err));
};
