/**
 * JUMPGAME
 * 
 * Write a function that's given an array of numbers. Each
 * number in the array represents the number of spaces you
 * can move from that position in the forward direction.
 * 
 * Assuming you start at space 0, return TRUE if you can
 * make it to the exact last position in the array or
 * false otherwise.
 * 
 * Examples:
 * 
 *  [1, 2, 0, 4, 1, 2, 3, 1]
 *      move from index 0 to index 1 (+1 space, the number at index 0)
 *      move from index 1 to index 3 (+2 spaces, the number at index 1)
 *      move from index 3 to index 7 (+4 spaces, the number at index 3)
 */

function jumpgame(steps) {

    for (let i = 0; i < steps.length; i = i + steps[i]) {
        // If we reach the last position, we win.
        if (i === steps.length - 1) {
            return true;
        }

        if (steps[i] === 0) {
            return false;
        }
    }

    // If we go too far we exit the loop, and there's no going back.
    return false;
}

console.log(jumpgame([1, 2, 0, 4, 1, 2, 3, 1]));