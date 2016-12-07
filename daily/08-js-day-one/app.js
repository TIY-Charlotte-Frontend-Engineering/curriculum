/*
 This is a multi-line comment.
*/

// Variable
let balance = 100; // represent a concept
balance = balance - 10; // number
balance = balance - 10;

console.log(balance);

let user = 'Oliver'; // string
// let job = 'construction worker';
// let employed = true; // boolean
let job = null; // null is a type! kind of a non-type

// Conditional: do this IF something is true
// =    assignment (set something equal to)
// ===  are these values equal?
// !==  are these values not equal?
if (job !== null) {
    console.log(user + ' is a ' + job);
} else { // if its NOT true (aka false)
    console.log(user + ' needs a job. You hiring?');
}

// Arrays: lists of things
//      Square brackets used to create an array
let prices = [1.17, 91.01, 14.51, 19.99];
// console.log(prices);

let sum = 0;
// for (<start>; <run-as-long-as>; <each-time>)
// "Starting at zero, run as long as i < 5 increasing i by one each time"
for (let i = 0; i < prices.length; i++) { // i++ is the increment operator. 'increase i by one'
    // console.log(prices[i]);
    sum = sum + prices[i];
}

console.log(sum);

// console.log(prices[0]);  // 0 is an 'index'