/**
 * Install ava (unit testing framework for JS)
 *      npm install --global ava
 * 
 * Each time you write tests for a project, install it
 * locally (including today).
 *      npm install ava
 */

/**
 * TESTING
 * 
 * Testing is widely underappreciated by learners but highly
 * valued in industry because working code > broken code.
 * 
 * The larger the project gets, the harder it is to keep it
 * functioning correctly. 'Larger' in terms of:
 *      - Number of people
 *      - Lifetime of project
 *      - Lines of code
 * 
 * Today we're going to be talking about a specific type of
 * testing known as 'unit testing'.
 */

// The idea is that we have a function, and we know what outputs should
// be produced when certain inputs are provided.

function jumpgame(steps) {
    for (let i = 0; i < steps.length; i = i + steps[i]) {
        // If we reach the last position, we win.
        if (i === steps.length - 1) {
            return true;
        }

        if (steps[i] === 0) {
            return false;
        }

        if (i < 0) {
            return false;
        }

        if (typeof(steps[i]) !== 'number') {
            return false;
        }
    }

    // If we go too far we exit the loop, and there's no going back.
    return false;
}

let test1 = jumpgame([1, 2, 0, 4, 1, 2, 3, 1]);
let answer1 = true;
console.log(test1 === answer1); // if true, test succeeds

// We'll use ava to write tests. Import it.
// Instead of require() we'll use import (more modern version of require())

import test from 'ava';

// test() is a function that accepts two parameters:
//      - A name of a test (any string, basically a label)
//      - A function to run representing the test

test('Basic examples', function (t) { // parameter t represents the current test
    // Try our original example; deepEqual() means check that param 1 and param
    // 2 are equal to the same thing.
    t.deepEqual(jumpgame([1, 2, 0, 4, 1, 2, 3, 1]), true);
    t.deepEqual(jumpgame([1, 2, 0, 4]), true);

    t.deepEqual(jumpgame([5, 2, 0, 4]), false);
    t.deepEqual(jumpgame([1, 0, 1]), false);
});

test('Negatives', function (t) {
    t.deepEqual(jumpgame([2, 3, -1, 3, 1]), true);
    t.deepEqual(jumpgame([-1, 4, 2]), false);
});

test('Non-number inputs', function (t) {
    t.deepEqual(jumpgame([1, 'hello', 3]), false);
});