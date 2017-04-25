/**
 * Filter
 * 
 * Run on an array, provide a function that returns TRUE to keep item and
 * FALSE to drop it. Think of filter as a for loop with an if statement
 * inside.
 * 
 * Reduce
 * 
 * Run on an array, provide a function that describes how to combine two
 * items into one item. Reduce runs that until there is ONLY ONE ITEM.
 * 
 * The purpose of reduce is to convert an array into a single item.
 */

function biggun(num) {
    if (num > 29) {
        return true;
    } else {
        return false;
    }
}

let nums = [5, 8, 9, 41, 18];
console.log(nums.filter(biggun));

///////////////////////////////////////////////////////////

let names = ['Pickles', 'Frederick', 'Latoya', 'E-Honda'];

function seven(name) {
    if (name.length === 7) {
        return true;
    } else {
        return false;
    }
}

console.log(names.filter(seven));

///////////////////////////////////////////////////////////

// Return the lengths of all names that start with the letter 'F'

let titles = [
    'Frank the Bold',           // 14
    'Ferdinand the Explorer',   // 22
    'Felicia the Merry',        // 17
    'Fae',                      // 3

    'Toby',
    'Eliza',
    'Rick',
];

// Step 1: filter down the array to 'f' names
// Step 2: convert f names into numbers by counting

function fnames(name) {
    if (name[0] === 'F' || name[0] === 'f') {
        return true;
    } else {
        return false;
    }
}

function lettercount(name) {
    return name.length;
}

function sum(first, second) {
    return first + second;
}

function greatest(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

// 'Chaining' - using the result of one function as the input to another
let keepers = titles
                .filter(fnames)
                .map(lettercount)
                .reduce(greatest, 0);

console.log(keepers);

/////// CHALLENGE ///////

/**
 * Use a combination of map, filter, and reduce. You may not need to use all
 * of them. NO FOR LOOPS.
 * 
 * Create an array of objects, each representing an item in a store. Each
 * object should have a name (string), price (number), and onSale (bool).
 * 
 * 1. Print out the name and original price of each item that's on sale.
 * 2. Assuming a 20% discount for sale items, print out the sale price of each
 *      item on sale.
 * 3. Add a selection of items to a 'cart' array and find the total price of
 *      all of those items, include discounts for items on sale.
 * 
 * NO FOR LOOPS.
 */

let inventory = [
    { name: 'Fishing pole', price: 140.00, onSale: false },
    { name: 'Bait', price: 4.00, onSale: true },
    { name: 'Life jacket', price: 69.00, onSale: true },
    { name: 'Gas', price: 64.73, onSale: false },
];

let cart = [];
cart.push(inventory[0]);
cart.push(inventory[0]);
cart.push(inventory[1]);
cart.push(inventory[2]);
cart.push(inventory[2]);

function isOnSale(item) {
    return item.onSale;
}

function applyDiscount(item) {
    return item.price * 0.8;
}

function price(item) {
    if (item.onSale) {
        return item.price * 0.8;
    } else {
        return item.price;
    }
}

function sum(first, second) {
    return first + second;
}

console.log(inventory.filter(isOnSale));
console.log(inventory.filter(isOnSale).map(applyDiscount));
console.log(cart.map(price).reduce(sum));

// nums.map(function);
// nums.filter(function);
// nums.reduce(function, ____)