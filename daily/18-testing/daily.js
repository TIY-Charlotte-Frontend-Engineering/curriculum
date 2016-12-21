/**
 * Write a function that accepts a word and list of letters as parameters. Return the 
 * total number of times that the specified letters appear in the specified word.
 * 
 * You only need to return a total count, not a count per letter.
 *
 * - Think about TYPES (types of inputs, types of output)
 * - Write out STEPS
 */

// First param: string
// Second param: array
// Output: number
function magic(word, letters) {
    let counter = 0;

    // 1. iterate through the word
    for (let i = 0; i < word.length; i++) {
        // 2. check each letter to see if it exists in in the `letters` array
        for (let j = 0; j < letters.length; j++) {
            // 3. increment if yes
            if (word[i] === letters[j]) {
                counter++; // increment counter by 1
                           // counter = counter + 1;
            }
        }
    }
    
    // 4. return count
    return counter;
}

let paradisio = magic('fishfood', ['f', 'h', 'e']);