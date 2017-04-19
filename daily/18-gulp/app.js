/**
 * Javascript modules are the equivalent of partials in Sass; they let us
 * break code into multiple files.
 * 
 * Gulp is going to recombine them for us.
 */

// Modules allow us to combine code from multiple files together.
// Use require() to bring one file into another.

let tax = require('./tax'); // .js is assumed
// By default, require() looks in node_modules directory
// UNLESS you put ./ before (which means look in current dir)

window.addEventListener('load', function () {
    console.log(tax.sales(140.89));
});