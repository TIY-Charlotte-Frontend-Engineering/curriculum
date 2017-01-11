/**
 * IIFE ('iffy')
 * Immediately invoked function expression
 *
 * Immediately = right away
 * Invoked = run 
 * Function = ...function...
 * Expression = ...expression...
 * 
 * A function that we write and run at the same time.
 * 
 * Why would we use an IIFE? To create a scope (often to avoid using
 * global scope). Common with modules.
 */

// function greet() {
//     console.log('good day');
// }()

// iife
console.log('1 janet');

(function () {
    let lives = 10;
    console.log('2 coat');

    window.addEventListener('load', function () {
        console.log('3 page is loaded');
    });

    console.log('4 house');
}());

console.log('5 boggle');

console.log(heroes);