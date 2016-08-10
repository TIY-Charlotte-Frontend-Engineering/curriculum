// console.log('hello');

let x = 5;
let y = 6 + x;
x = 7;

let title = 'My Heart Will Go On';
// console.log(title);

// Arithmetic: four 'normal' operations and one bonus
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// What's the remainder after removing all groups
// of y from x?
// console.log(x % y); // 'modulus'

/**
 * Data types
 * 
 * 1. String: 'words' in non-coder person speak
 * 2. Number
 * 3. Boolean: true or false
 * 4. Arrays: list of more than one of the other types
 * 5. Objects: 'complex' data types
 */

// console.log(5 + 5);
// console.log('Hello,' + ' peasant'); // concatenated

// let username = 'Luke';
// let age = 48;
// console.log('Welcome to the site ' + username);

// if (boolean) {
//    thing to do when boolean = true
// } else {
//    thing to do when boolean = false
// }
// if (age > 30) {
//     console.log('youre looking young as ever, kid');
// } else if (age > 20) {
//     console.log('grow up');
// } else if (age > 10) {
//     console.log('ahh the teen years');
// } else {
//     console.log('YOURE SO CUTE');
// }


// let user = 'Luke';
// let ages = [1, 6, 19, 4, 8, 14]; // an array
// Common operations on lists / arrays:
// 1. Removing items
// 2. Add items
// 3. Rearrange items
// 4. Look at specific items

// How to get specific items from the list
// console.log(ages[0]); // first item 
// console.log(ages[1]); // second item

// How to add new things to the array
// ages.push(5);
// console.log(ages);
// console.log(ages[6]);

let prices = [1.99, 2.00, 5.00];

// Question: how can we find the total cost?
// console.log(prices[0] + prices[1] + prices[2]);

let subtotal = 0;
let numberOfThings = prices.length; // property of an array

// for (at the beginning; as long as; after each)
// At the beginning, create a new variable called now and set it to 0
// Keep running the loop as long as now < numberOfThings
// After each iteration, increase the value of now by 1
for (let now = 0; now < numberOfThings; now = now + 1) {
    subtotal = subtotal + prices[now];
    console.log(subtotal);
}

// console.log(subtotal);

// subtotal
// sales tax
// discount (buy five things, get $1 off)
// grand total