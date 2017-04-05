/*

Step #1 should always be to break the problem into steps.
Step #2 is to identify inputs and outputs (types).
    - Input: array of numbers
    - Output: single number
Step #3 is to start writing code.
*/







// Bad idea: doesn't scale well (lots of items = lots of code)
let item1 = 10;
let item2 = 14;
let item3 = 10.99;
let item4 = 19.81;

// 'Arrays' are lists of data.
let items = [10, 14, 10.99, 19.81, 14.53];

console.log(items[0]); // value of the first item
console.log(items.length); // number of items 

let total = 0;
// This will work for any number of items!
for (let count = 0; count < items.length; count = count + 1) {
    total = total + items[count];
}

console.log(total);
