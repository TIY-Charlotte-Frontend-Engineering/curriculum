
/**
 * FUNctions are names for processes.
 * Variables are names for data.
 * 
 * Oh-so-many benefits:
 *  - Naming
 *  - Grouping similar ideas into one place
 *  - DRY!
 *  - Probs more
 */

/**
 * doubleMyMoney is the name of the function 
 * money is a parameter. A parameter is an INPUT to a function.
 * 'return' is a special keyword that means 'here's the answer'
 */
function doubleMyMoney(money, taxRate, compoundedInterestRate) {
    return money * 2;
}

let balance = doubleMyMoney(100, 5, 1); // CALLING the function is actually running it
let budget = doubleMyMoney(300, 5, 100);

function product(second, first) {
    return first * second;
}

product(5, 4);

function makeChange(money) {
    let change = [0, 0, 0, 0];

    change[0] = Math.floor(money / 20); // Number of complete 20's we can pull out
    money = money % 20; // Bills left to provide change for

    change[1] = Math.floor(money / 10);
    money = money % 10;

    change[2] = Math.floor(money / 5);
    money = money % 5;

    change[3] = money;

    return change;
}

let bills = makeChange(118);
let bills2 = makeChange(114);
let bills3 = makeChange(6);
console.log(bills);
console.log(bills2);
console.log(bills3);
// makeChange(114);
// makeChange(11);

// Write a function that returns the number of x's in a string
// Inputs: one string 
// Outputs: one number 

function xword(word) {
    // 1. Go through all the letters 
    // 2. If the current letter is an x, count it.
    // 3. Return the final answer.
    let freq = 0;

    for (let i = 0; i < word.length; i++) {
        // Logical operators
        //  &&      and
        //  ||      or
        //  !       not
        if (word[i] === 'x' || word[i] === 'X') {
            freq = freq + 1;
        }
    }

    // When it doesn't work, you might have forgotten...
    return freq;
}

let x1 = xword('x123x');
let x2 = xword('xzxzxzxzxzxzxzx');

console.log('PRACTICE');
// Write a function that accepts an array of numbers and returns 
// the average.

// Inputs: array of numbers 
// Output: number

function average(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]; // add the current number to the existing sum 
        // sum += nums[i];
    }

    return sum / nums.length;
}

let avg = average([1, 3, 5]); // returns 3
average([5, 5, 5, 5]); // returns 5
average([1, 8, 2, 5]); // returns 4