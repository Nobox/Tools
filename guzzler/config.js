/**
 * Config settings
 *
 * Change these paths and task settings to your project
 */

var config      = {};


/**
 * Source files path
 */

config.assets   = './app/assets';

config.styles   = config.assets + '/stylesheets';
config.scripts  = config.assets + '/scripts';
config.imgsrc   = config.assets + '/images';
config.svgsrc   = config.assets + '/svg';


/**
 * Compiled files output folder
 */

config.dist  = 'public';

config.css   = config.dist + '/css';
config.js    = config.dist + '/js';
config.img   = config.dist + '/img';
config.svg   = config.dist + '/svg';

config.bower = config.dist + '/bower_components';


/**
 * Browserify options
 */

config.browserify = {
    bundlesConfig: [
        {
            entries: ['./' + config.scripts + '/main.coffee'],
            dest: config.js,
            outputName: 'app.js',
            extensions: ['.coffee'],
            paths: ['node_modules', config.scripts],
            debug: true
        }
    ]
}


/**
 * Node SASS options (libsass)
 */

config.sass = {
    errLogToConsole: true,
    includePaths: [config.bower]
};


/**
 * PostCSS postprocessors
 */

config.postcss = [
    require('autoprefixer-core')({
        browsers: ['last 2 versions', 'Explorer 9'],
    }),
    require('css-mqpacker'),
    require('csswring')
];


/**
 * SVG Symbols options
 */
config.svgSymbolsOpts = {
    templates: ['default-svg']
};


/**
 * Revisioning (cache busting)
 */

config.rev = {
    assets: [
        config.css + '/**/*.css',
        config.js + '/**/*.js',
        config.img + '/**/*'
    ],
    manifest: {
        name: 'assets.json',
        dest: 'app/storage/meta'
    }
}











/* Export */
module.exports = config;
