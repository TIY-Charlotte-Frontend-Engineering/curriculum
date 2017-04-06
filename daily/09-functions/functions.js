/*
    A function is a block of code that serves a particular purpose. We use them
    to break up our code into reusable sections.

    Functions:
        - Have names so that they're easy to reuse (like variables)
        - Have inputs and outputs so they can be generalized
        - Have their own 'scope' so that variables created inside them can't be
          accessed by other parts of your program.
    
    They are the first and most significant of all the organizational tools available
    to programmers.
*/

// Create a new function with the name 'makeChange'
// Like creating a variable with 'let'
// Function anatomy:
//  - Name (makeChange)
//  - Inputs (amount) - 'parameter'
//  - Outputs ([1, 6, 2, 3])
//  - Body (between {})
function makeChange(amount) {
    let bills = [20, 10, 5, 1, .25];
    let answer = [0, 0, 0, 0, 0];

    for (let count = 0; count < bills.length; count = count + 1) {
        answer[count] = Math.floor(amount / bills[count]);
        amount = amount - (answer[count] * bills[count]);
    }

    return answer;
}

let money = makeChange(14);
let cash = makeChange(78);
let dinero = makeChange(51);

console.log(money);
console.log(cash);
console.log(dinero);


// Input: array of numbers
function total(things) {
    // A 'scope' is the set of names available to a program at a particular
    // point in the code. Functions (and any block of code) create a new
    // scope.
    //
    // A variable is a part of the scope it is defined in.
    let total = 0;

    for (let count = 0; count < things.length; count = count + 1) {
        total = total + things[count];
    }

    return total;
}

console.log(total); // will not work - total is 'out of scope'

let items = [1.15, 81.90, 6.45, 31.31];
let cost = total(items);

console.log(cost);

/**
 * Problem #1: find the highest value in a list of numbers (tallest mountain)
 *      Return the largest number.
 * 
 * Problem #2: count the number of x's in a provided string and return the count
 */

function largestNumber(nums) {
    let largest = nums[0];

    // Increment operator: ++
    for (let count = 0; count < nums.length; count++) {
        if (nums[count] > largest) {
            largest = nums[count];
        }
    }

    return largest;
}

let first = largestNumber([5, 8, 2, 9, 1]);
let second = largestNumber([10, 5, 2, 7, 9]);

console.log(first);
console.log(second);

function countx(letters) {
    let count = 0;

    for (let index = 0; index < letters.length; index++) {
        if (letters[index] === 'x') {
            count++;
        }
    }

    return count;
}

let word1 = countx('xyxyxy');
let word2 = countx('xello xoto');

console.log(word1);
console.log(word2);