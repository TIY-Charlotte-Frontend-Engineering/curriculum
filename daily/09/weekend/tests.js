/**
 * This is the kingpen of the testing code. It runs the global 'map', 'filter', etc functions
 * with some inputs and verifies that the correct answers are being returned. It then adds some
 * DOM elements so that it's easier to see what's working and what's not.
 */
window.addEventListener('load', function () {
    var foods = ['fish', 'chips', 'tater tots'];
    var numbers = [100, 67, 41, 98, 1004, 77];
    var squares = [81, 16, 49, 121];

    try {
        /**
         *
         * map() tests
         *
         */

        register("map(['fish', 'chips', 'tater tots'], function(food) { return food + ' is delicious'; })", map(foods, function (food) {
            return food + ' is delicious';
        }), ['fish is delicious', 'chips is delicious', 'tater tots is delicious']);

        register("map(['fish', 'chips', 'tater tots'], function(food) { return food.length; })", map(foods, function (food) {
            return food.length;
        }), [4, 5, 10]);

        register("map([100, 67, 41, 98, 1004, 77], function(num) { return num - 7; })", map(numbers, function (num) {
            return num - 7;
        }), [93, 60, 34, 91, 997, 70]);

        register("map([81, 16, 49, 121], Math.sqrt)", map(squares, Math.sqrt), [9, 4, 7, 11]);

        /**
         *
         * filter() tests
         *
         */

        register("filter(['fish', 'chips', 'tater tots'], function (word) { return word.length > 5;})", filter(foods, function (word) {
            return word.length > 5;
        }), ['tater tots']);

        register("filter([100, 67, 41, 98, 1004, 77], function (num) { return num >= 100; })", filter(numbers, function (num) {
            return num >= 100;
        }), [100, 1004]);

        register("filter([100, 67, 41, 98, 1004, 77], function (num) { return (num % 2) === 0; })", filter(numbers, function (num) {
            return (num % 2) === 0;
        }), [100, 98, 1004]);

        register("filter(['fish', 'chips', 'tater tots'], function (food) { return food[0] !== 'f'; })", filter(foods, function (food) {
            return food[0] !== 'f';
        }), ['chips', 'tater tots']);

        /**
         *
         * reduce() tests
         *
         */

        register("reduce([81, 16, 49, 121], function (total, next) { return total + next; }, 0)", reduce(squares, function (total, next) {
            return total + next;
        }, 0), 267);

        register("reduce(['fish', 'chips', 'tater tots'], function (total, word) { return total + word.length; }, 0)", reduce(foods, function (total, word) {
            return total + word.length;
        }, 0), 19);

        register("reduce([100, 67, 41, 98, 1004, 77], function (champ, challenger) { if (champ > challeneger) { return champ; } else { return challenger; } }, 100)", reduce(numbers, function (champ, challenger) {
            if (champ > challenger) {
                return champ;
            } else {
                return challenger;
            }
        }, numbers[0]), 1004);

        register("reduce(['fish', 'chips', 'tater tots'], function (champ, challenger) { if (champ.length > challenger.length) { return champ; } else { return challenger; } }, 'fish')", reduce(foods, function (champ, challenger) {
            if (champ.length > challenger.length) {
                return champ;
            } else {
                return challenger;
            }
        }, foods[0]), 'tater tots');

        /**
         *
         * reduce() tests
         *
         */

        register("reject([100, 67, 41, 98, 1004, 77], function (num) { return num > 75; })", reject(numbers, function (num) {
            return num > 75;
        }), [67, 41]);

        register("reject(['fish', 'chips', 'tater tots'], function (food) { return food[food.length - 1] === 's'; })", reject(foods, function (food) {
            return food[food.length - 1] === 's';
        }), ['fish']);

        register("reject([81, 16, 49, 121], function (num) { return Math.sqrt(num) > 4; })", reject(squares, function (num) {
            return Math.sqrt(num) > 4;
        }), [16]);

        register("reject([100, 67, 41, 98, 1004, 77], function (num) { return Math.floor(num / 4) === num / 4; })", reject(numbers, function (num) {
            return Math.floor(num / 4) === num / 4;
        }), [67, 41, 98, 77]);

        /**
         *
         * find() tests
         *
         */

        register("find([100, 67, 41, 98, 1004, 77], function (num) { return num < 100; })", find(numbers, function (num) {
            return num < 100;
        }), 67);

        register("find([81, 16, 49, 121], function (num) { return num > 200; })", find(squares, function (num) {
            return num > 200;
        }), undefined);

        register("find(['fish', 'chips', 'tater tots'], function (word) { return word.length > 4; })", find(foods, function (word) {
            return word.length > 4;
        }), 'chips');

        register("find([81, 16, 49, 121], function (num) { return (num / 2) < 20; })", find(squares, function (num) {
            return (num / 2) < 20;
        }), 16);

        /**
         *
         * some() tests
         *
         */

        register("some([81, 16, 49, 121], function (num) { return num > 100; })", some(squares, function (num) {
            return num > 100;
        }), true);

        register("some([81, 16, 49, 121], function (num) { return num > 200; })", some(squares, function (num) {
            return num > 200;
        }), false);

        register("some(['fish', 'chips', 'tater tots'], function (word) { return word.length > 20; })", some(foods, function (word) {
            return word.length > 20;
        }), false);

        register("some(['fish', 'chips', 'tater tots'], function (word) { return word.indexOf('tate') > -1; })", some(foods, function (word) {
            return word.indexOf('tate') > -1;
        }), true);

        /**
         *
         * every() tests
         *
         */

        register("every([81, 16, 49, 121], function (num) { return num > 100; })", every(squares, function (num) {
            return num > 100;
        }), false);

        register("every(['fish', 'chips', 'tater tots'], function (word) { return word.length > 3; })", every(foods, function (word) {
            return word.length > 3;
        }), true);

        register("every(['fish', 'chips', 'tater tots'], function (word) { return word.indexOf('s') > -1; })", every(foods, function (word) {
            return word.indexOf('s') > -1;
        }), true);

        register("every([81, 16, 49, 121], function (num) { return num > 10; })", every(squares, function (num) {
            return num > 10;
        }), true);

        // If there's an error, add a <div> that's gonna be hard to ignore.
    } catch (e) {
        var doc = document.createElement('div');
        doc.classList.add('whammy');
        doc.textContent = "Check the console; there was a JS error.";

        document.getElementById('tests').appendChild(doc);
        throw e;
    }

});