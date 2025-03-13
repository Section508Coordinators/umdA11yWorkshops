/* gulpfile.js */

/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
*/
uswds.settings.version = 3;

/**
* Path settings
*/
uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './sass/uswds';

/**
* Exports
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;