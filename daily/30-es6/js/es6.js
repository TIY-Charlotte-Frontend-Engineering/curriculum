
// window.addEventListener('load', function () {
    // Put this anywhere; normal scope rules will apply
    // let testModule = require('./module'); // import module.js

    // console.log('ready to rock ');
// });

/**
 * Arrow functions
 * 
 * Shorthand for writing anonymous functions.

 * If there's only one param, you can drop the parentheses.
 * If there's only one line in your function body, you can drop the squiggles and
 * return statement.
 * 
 * The only difference between an arrow function and a normal function is that
 * arrow functions DO NOT CHANGE THE VALUE OF THIS.
 */
(param, param2, param3) => {
  return 5;
}


// ES5
let nums = [4, 6, 2];
nums.maps(function (num) { // pass a function w/ each num coming in as a parameter
    return num * num;
});

// ES6
// nums.map(num => num * num);
let square = num => num * num;

// Arrow function w/ no parameters and a longer body.
window.addEventListener('load', () => {
    console.log('hi');
});

window.addEventListener('load', function () {
    console.log('hi');
});

