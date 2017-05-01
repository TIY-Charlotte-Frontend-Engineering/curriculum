import test from 'ava';

let fn = require('./fn');

/* map: applies a function to each element in an array */
test('map', function (t) {
    function timesTwo(x) {
        return x * 2;
    }

    function greet(who) {
        return 'Hello ' + who;
    }

    t.deepEqual(fn.map([1, 2, 3], timesTwo), [2, 4, 6]);
    t.deepEqual(
        fn.map(['Ted', 'Franklin', 'Janet'], greet), 
        ['Hello Ted', 'Hello Franklin', 'Hello Janet'],
    );
});

/* filter: return the elements that return 'true' from the function */
test('filter', function (t) {
    function even(num) {
        return num % 2 === 0;
    }

    function startsWithS(word) {
        return word[0].toLowerCase() === 's';
    }

    t.deepEqual(fn.filter([5, 7, 3, 4, 18], even), [4, 18]);
    t.deepEqual(
        fn.filter(['Samsonite', 'Samsung', 'Nokia', 'Target'], startsWithS),
        ['Samsonite', 'Samsung'],
    );
});

/* reduce: takes an array and narrows it down to one thing */
test('reduce', function (t) {
    function sum(a, b) {
        return a + b;
    }

    function longest(champ, challenger) {
        if (champ.length > challenger.length) {
            return champ;
        } else {
            return challenger;
        }
    }

    t.deepEqual(fn.reduce([6, 1, 2, 10], sum, 0), 19);
    t.deepEqual(
        fn.reduce(['hi', 'tower', 'convertible', 'sausage'], longest, ''), 
        'convertible',
    );
});

/* find: finds the first element that returns true from the func */
