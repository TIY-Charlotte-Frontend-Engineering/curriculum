
/**
 * A scope is a list of names that're available in a given block of code.
 * 
 * All variables and functions are created in a given scope, and only
 * exist as long as the scope exists.
 * 
 * In Old JS, scopes are created for each function.
 * In New JS, scopes are created for each block of code (between { }).
 * 
 * Here we have three scopes:
 *  - Global scope 
 *      - x 
 *      - count
 *  - Function count() scope
 *      - max
 *  - For loop scope
 *      - i
 */

let x = 5;

function count(max) {
    for (let i = x; i < max; i++) {
        console.log(i);
    }
}

count(15);

function rufio() {
    let start = 'abc';

    for (let x = 0; x < 5; x++) {
        if (x > start.length) {
            let p = true;
            console.log(x);
        }
    }

    console.log(x);
}

let grande = 0;

function findLargest(nums) {
    let largest = 0;

    for (let i = 0; i < nums.length; i++) {
        // if the current number is bigger than the current largest
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }

    // grande = largest; // btw bad idea
    return largest;
}

grande = findLargest([4, 5, 7, 8]);
