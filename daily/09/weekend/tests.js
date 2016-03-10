/**
 * This is the kingpen of the testing code. It runs the global 'map', 'filter', etc functions
 * with some inputs and verifies that the correct answers are being returned. It then adds some
 * DOM elements so that it's easier to see what's working and what's not.
 */
window.addEventListener('load', function () {
    var foods = ['fish', 'chips', 'tater tots'];
    var numbers = [100, 67, 41, 98, 1004, 77];
    var squares = [81, 16, 49, 121];

    /**
     * First test map with a bunch of stuff.
     */
    try {
        register("[map] map over foods", map(foods, function (food) {
            return food + ' is delicious';
        }), ['fish is delicious', 'chips is delicious', 'tater tots is delicious']);

        register("[map] get length of each food", map(foods, function (food) {
            return food.length;
        }), [4, 5, 10]);

        register("[map] subtract from all numbers", map(numbers, function (num) {
            return num - 7;
        }), [93, 60, 34, 91, 997, 70]);

        register("[map] get the square root of some squares", map(squares, Math.sqrt), [9, 4, 7, 11]);
        /**
         * Then test filter with a bunch of the same stuff.
         */
        register("[filter] remove all words that are short", filter(foods, function (word) {
            return word.length > 5;
        }), ['tater tots']);

        register("[filter] remove all numbers < 100", filter(numbers, function (num) {
            return num >= 100;
        }), [100, 1004]);

        register("[filter] remove all odd numbers", filter(numbers, function (num) {
            return (num % 2) === 0;
        }), [100, 98, 1004]);

        register("[filter] remove all foods that start with 'f'", filter(foods, function (food) {
            return food[0] !== 'f';
        }), ['chips', 'tater tots']);

        /**
         * Test reduce with a bunch of stuff.
         */

        register("[reduce] total all squares", reduce(squares, function (total, next) {
            return total + next;
        }, 0), 267);

        register("[reduce] number of letters in foods", reduce(foods, function (total, word) {
            return total + word.length;
        }, 0), 19);

        register("[reduce] find max number", reduce(numbers, function (champ, challenger) {
            if (champ > challenger) {
                return champ;
            } else {
                return challenger;
            }
        }, numbers[0]), 1004);

        register("[reduce] find longest word", reduce(foods, function (champ, challenger) {
            if (champ.length > challenger.length) {
                return champ;
            } else {
                return challenger;
            }
        }, foods[0]), 'tater tots');
    } catch (e) {
        var doc = document.createElement('div');
        doc.classList.add('whammy');
        doc.textContent = "Check the console; there was a JS error.";

        document.getElementById('tests').appendChild(doc);
        throw e;
    }

});