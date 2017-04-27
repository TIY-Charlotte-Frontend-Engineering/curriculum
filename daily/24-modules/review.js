import test from 'ava';

let practice = require('./practice');

/**
 * longx
    Write a function that accepts one parameter: a sequence (string). 
    Return the length of the longest continuous string of x's.
    For example, abxxaxterxtxxxa should return 3.
 */

test('longx', function (t) {
    t.deepEqual(practice.longx('abxxaxterxtxxxa'), 3);
    t.deepEqual(practice.longx('txxxxpxxo'), 4);
    t.deepEqual(practice.longx('pxxxx'), 4);
    t.deepEqual(practice.longx('abc'), 0);
    t.deepEqual(practice.longx(''), 0);
    t.deepEqual(practice.longx('xxxpxx'), 3);
    t.deepEqual(practice.longx('axxxpxxxw'), 3);
});

/**
 * guesswho

    Write a function that accepts one parameter: a set of func 
    (array). Return the numbers from 1-100 that return true for 
    each of the functions in the array.
 */

test('guesswho', function (t) {
    let funcs = [
        function big(x) { return x > 80; },
        function odd(x) { return x % 2 === 1; },
    ];

    t.deepEqual(practice.guesswho(funcs), [81, 83, 85, 87, 89, 91, 93, 95, 97, 99]);
});