let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */

function sales_imperative(foods) {
    let taxed = [];

    for (let i = 0; i < foods.length; i++) {
        let tax = foods[i].price * 1.1; // increase by 10%

        // Option 1: immutable
        taxed.push({
            name: foods[i].name,
            price: tax,
        });

        // Option 2: mutable
        // foods[i].price = foods[i].price * 1.1;
    }

    return taxed;
}

function sales_functional(foods) {
    // Apply sales tax to one item
    function tax_it(food) {
        return {
            name: food.name,
            price: food.price * 1.1,
        };
    }

    return foods.map(tax_it);
}

console.log(sales_imperative(items));
console.log(sales_functional(items));
console.log(items);

/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */

let junk = [5, 9, 'hi', true, 'sandwich'];

function zeroes_imperative(items) {
    let new_junk = [];

    for (let i = 0; i < items.length; i++) {
        new_junk.push(0);
    }

    return new_junk;
}

function zeroes_functional(items) {
    function zero(item) {
        return 0;
    }    

    return items.map(zero);
}

console.log(zeroes_imperative(junk));
console.log(zeroes_functional(junk));

/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */
let phrase = 'Born to be Willllllld';

function abbrev_imperative(sentence) {
    let words = sentence.split(' ');
    let abbrev = [];

    for (let i = 0; i < words.length; i++) {
        abbrev.push(words[i][0].toUpperCase());
    }

    return abbrev.join('');
}

function abbrev_functional(sentence) {
    function abbrev(word) {
        return word[0].toUpperCase();
    }

    let words = sentence.split(' ');
    // Get a bunch of letters and join them again into a string
    return words.map(abbrev).join('');
}

console.log(abbrev_imperative(phrase));
console.log(abbrev_functional(phrase));

/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */

function negative_imperative(nums) {
    let negative = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negative.push(true);
        } else {
            negative.push(false);
        }
    }

    return negative;
}

function negative_functional(nums) {
    function neg(num) {
        if (num < 0) {
            return true;
        } else {
            return false;
        }
    }

    return nums.map(neg);
}

let nums = [1, -9, 5, 81, -17];
console.log(negative_imperative(nums));
console.log(negative_functional(nums));

console.log(nums);

