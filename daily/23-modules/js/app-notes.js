/**
 * Modules 
 * 
 * 'Modules' in JS serve the same purpose as partials in Sass. They
 * allow us to break our code into multiple files, which makes it easier
 * to stay organized and reuse code.
 * 
 * Reasons to put things in modules:
 *  - If you want to reuse code in multiple files, put it in a module.
 *  - If you want to logically break up your code into smaller pieces, PIIAM.
 *  - If you want other people to use your code, PIIAM.
 */

let monies = require('./currency');
// Golden rule with require():
//   - if you start with a ./, it will look for YOUR code
//   - if you don't, it'll look in node_modules

console.log(monies);