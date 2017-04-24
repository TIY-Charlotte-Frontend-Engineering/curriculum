/**
 * Functional programming
 * 
 * FP is a style of programming that has become incredibly popular in the
 * Javascript world in the last 5 years (the idea is from the 70's though).
 * 
 *      ================== 
 *      IT WORKS EXACTLY THE SAME WAY AS
 *      IMPERATIVE (what we've been doing)
 *      BUT IS ORGANIZED DIFFERENTLY.
 *      ================== 
 * 
 * Functional programming is based around -- you guessed it -- functions and
 * prioritizes three properties for your program:
 * 
 *  1.  Code should be DETERMINISTIC. If you give a function the same inputs,
 *      it should produce the same outputs.
 *  2.  Data should be IMMUTABLE -- avoid changing values once they've been
 *      created.
 *  3.  Functions should be COMPOSABLE -- write small, single purpose functions
 *      that can be re-used for a lot of different things.
 */

/**
 * 1.   Using functions as parameters to other functions ("functions as data" or
 *      callbacks).
 * 2.   Map, filter, reduce
 */

// Callbacks are functions passed as parameters to other functions.
function greet(person) {
    return 'Hello, ' + person;
}

function medieval(person) {
    return 'Good morrow, ' + person;
}

function narrate(message) {
    return "'" + message + "', said the old man by the river.";
}

function taleAbout(name, a, b) {
    let greeting = a(name);
    return b(greeting);
}

// 'Hello young boy', said the old man by the river.
narrate('Hello young boy');
// 'Hello, Sarah', said the old man by the river.
console.log(taleAbout('Sarah', greet, narrate));
console.log(taleAbout('Sarah', medieval, narrate));
greet('Sarah');


let nums = [5, 8, 11, 5, 3];

function addTwo(num) {
    return num + 2;
}

function transform(vals, fn) {
    for (let i = 0; i < vals.length; i++) {
        // Functional cardinal sin: mutating an existing array.
        // Avoid mutation. Instead create a new array.
        vals[i] = fn(vals[i]);
    }

    return vals;
}

console.log(transform(nums, addTwo));
console.log(transform(nums, addTwo));
console.log(transform(nums, addTwo));

// Array.map(function)
// Apply the specified function to each item in the array.

let names = ['Gary', 'Sven', 'Archibald', 'Janette'];

function allCaps(name) {
    return name.toUpperCase();
}

function count(word) {
    return word.length;
}

console.log(names.map(allCaps));
console.log(names);

// console.log(nums);