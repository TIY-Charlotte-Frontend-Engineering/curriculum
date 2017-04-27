/**
 * Create and test a module that validates a few different
 * types of inputs. Each function should return true if
 * it matches or false if not.
 * 
 * Call your module 'patterns.js'.
 * 
 * You should have a different function to validate each of:
 *  - A license plate number 
 *    (six numbers or letters, potentially with a space in the middle)
 *  - An IP address
 *    (17.18.91.155, each number is 1-3 digits)
 *  - An HTML opening tag
 *    (angle brackets with text inside)
 * 
 * Each function has one string input, return boolean
 */

let patterns = require('./patterns');

console.log(patterns.license('AAA 183'));
console.log(patterns.ip('111.44.33.8'));
console.log(patterns.html('<body>'));
