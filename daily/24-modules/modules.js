/**
 * Modules in depth
 * 
 * Modules allow us to break our code into multiple files. Why would we want to
 * do this?
 *      - More readable, easier to think through.
 *      - Testing is easier (test individual modules)
 *      - Easier to reuse code you've written.
 * 
 * All modules involve "importing" certain code on one end and "exporting" it on
 * the other. You can only import code that's been exported.
 */

// Import whatever is exported from currency.js
// let currency = require('currency'); // looks in node_modules
let currency = require('./currency');

console.log(currency.symbols.USD);
console.log(currency.symbols.EUR);

console.log(currency.addDollar(5.15));