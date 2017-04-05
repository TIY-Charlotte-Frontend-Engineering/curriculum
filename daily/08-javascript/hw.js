
/*
    Problem #1: tallest mountain

    Given an array of heights of mountains, print out the height of the tallest one.

    FIRST   steps
    SECOND  inputs + outputs
    THIRD   code
*/


// 1. The first mountain is the tallest mountain so far.
// 2. Check each mountain to see if its bigger.
//      - if so, that's the new tallest mountain
//      - if not, move on
// 3. Once we get to the end, the tallest mountain is the answer

// Inputs: an array of numbers (heights)
// Output: number

let mountains = [18, 11, 104, 78, 64];

let tallest = mountains[0];

for (let current = 0; current < mountains.length; current = current + 1) {
    if (mountains[current] > tallest) {
        // change tallest to the current mountain
        tallest = mountains[current];
    }
}