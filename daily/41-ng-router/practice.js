
/**
 * Roller coaster words
 * 
 * A roller coaster word is one where each letter alternates between going forward and
 * backwards in the alphabet. Example: 'decriminalization', 'dog'. Second letter is later
 * than first letter in a roller coaster word.
 * 
 * Write a function that returns true if a word is a roller coaster word or false
 * otherwise.
 */


'a' > 'b' // returns false
't' > 'g' // returns true

// What are we looking for in English?
// Starting at the beginning, 1=>2 should be higher, 2=>3 should be lower, etc.

function rollercoaster(word) {
    // 1. boolean for whether its a rollercoaster
    // 2. for loop over all the letters
    // 3. if statement comparing neighboring letters
    // 4. if statement determining whether we want greater than or less than
    let rc = true;

    for (let i = 0; i < word.length - 1; i++) {
        // if i is even, i + 1 should be bigger than i
        // if i is odd, i + 1 should be smaller than i
        if (i % 2 === 0) {  // even
            if (word[i] > word[i + 1]) {
                rc = false;
            }
        } else {            // odd
            if (word[i + 1] > word[i]) {
                rc = false;
            }
        }
    }

    return rc;
}