/**
 * A callback is a function passed as input that will be called at 
 * a later time (potentially right away or potentially a while later).
 * 
 * window.addEventListener('load', init);
 */

// Example #1
function addTwo(num) {
    return num + 2;
}

function multi(num) {
    return num * 3;
}

function doMath(func) {
    return 3 + func(5);
}

console.log('EXAMPLE 1');
console.log(doMath(addTwo));    // logs 10 (3 + 7)
console.log(doMath(multi));     // logs 18 (3 + 15)
console.log(doMath(function (x) {
    return x * 4;
}));                            // logs 23
console.log(doMath(function (num) {
    return num;
}));                            // logs 28




// Example #2
function greet(name, prepare) {
    return 'Good day, ' + prepare(name);
}

function proper(name) {
    return 'Lord or Lady ' + name;
}

function cordial(name) {
    return 'Mr, Mrs, or Miss ' + name;
}

console.log('EXAMPLE 2')
console.log(greet('Fatimah', cordial));

// Example #3
let prices = [1.10, 5.41, 9.99];

function modify(nums, op) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = op(nums[i]);
    }

    return nums;
}

function increase(num) {
    return num + 1;
}

console.log('EXAMPLE 3')
console.log(modify(prices, increase)); // logs [2.10, 6.41, 10.99] 

// Example 4
/**
 * 'Functional programming' involves a set of tools very similar to things 
 * we've used in the past (loops primarily). These are ALTERNATIVES to 
 * loops, not strictly 'better' or 'worse'.
 * 
 * array.map(func)      =>  return a new array with func applied to each item
 * array.filter(func)   =>  return a new array with items where func returns true
 */
let mountains = [91, 55, 70, 100];

function erode(height) {
    if (height >= 100) {
        return height - 3;
    } else {
        return height;
    }
}

// When you want to modify items in the array.
// Observations:
//      - output.length === input.length, always
//      - values can but don't have to be different
console.log(mountains.map(erode));
console.log(mountains.map(function (height) {
    if (height >= 100) {
        return height - 3;
    } else {
        return height;
    }
})); // [88, 52, 67, 97]

function isBig(height) {
    // return height > 90;
    if (height > 90) {
        return true;
    } else {
        return false;
    }
}
// callback to filter MUST return true or false 
//  true means keep
//  false means discard
// filter cannot change values, only keeps / discards
console.log(mountains.filter(isBig)); // [91, 100]

/**
 * Sweetshoes.com members get 20% off.
 * A members comes and filters shoes by 'less than $100'.
 * Print out all appropriate shoe prices with a '$' in front of them.
 */
let shoes = [14, 180, 300, 110, 87];

// 1. map to apply discount
// 2. filter down to cheaper shoes
// 3. map to add a $ to each
function discount(price) {
    return price * 0.8;
}

function cheaper(price) {
    return price < 100; // return true if price < 100
}

function addDollars(price) {
    return '$' + price.toFixed(2);
}

let display = shoes.map(discount).filter(cheaper).map(addDollars);
console.log(display);