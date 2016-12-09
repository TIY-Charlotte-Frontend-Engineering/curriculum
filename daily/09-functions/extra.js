/**
 * Fizzbuzz
 * Because I guess I kind of have to.
 * 
 * Print out all the numbers from 1-max.
 * If the number is divisible by 3, instead of printing the #, print 'fizz'
 * If the number is divisible by 5, instead of printing the #, print 'buzz'
 * If the number is divisible by 3 and 5, instead of #, print 'fizzbuzz'
 */

// Input: the number to count up to
function fizzbuzz(max) {
    // 1. print out all the numbers 
    // 2. iterate through all the numbers, and print out each one
    for (let i = 1; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // close, not quite right
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) { // if i is divisible by 3
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(21); // call the function, print out 1-21