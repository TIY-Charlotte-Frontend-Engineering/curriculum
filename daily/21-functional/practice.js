/**
 * Write a function that removes all vowels from a sentence.
 * 
 * Tip: figure out how to solve a smaller part. Solve the
 * smaller part multiple times to solve the larger problem.
 */

function removeVowels(sentence) {
    // Every character is or is not a vowel (boolean)
    // Loop over all letters
    // If 
    let letters = [];

    for (let i = 0; i < sentence.length; i++) {
        // If its a vowel
        // if (['a', 'e', 'i', 'o', 'u'].indexOf(sentence[i]) > -1) {

        // }
        if (sentence[i] !== 'a' && 
            sentence[i] !== 'e' &&
            sentence[i] !== 'i' &&
            sentence[i] !== 'o' && 
            sentence[i] !== 'u') {

            letters.push(sentence[i]);
        }
    }

    return letters.join('');
}

console.log(removeVowels('What does this even mean?'));
console.log(removeVowels('Another line, another sentence'));

// Organizing code into multiple files (or not multiple files)
// Figuring out how to display items from orders
// Keeping comments up to date as things evolve
