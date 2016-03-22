/*
 * Return the score for a word.
 * 
 * word: (string) the word to be scored
 * values: (object) properties as letters, values as the score for each letter.
   {
   a: 1,
   e: 1,
   i: 2,
   j: 3,
   o: 3,
   u: 1,
   }
   
   {
   age: 15,
   name: 'jan'
   }
 */
// Patterns to identify here:
//  1. We've got iteration happening.
//  2. We need to use the values array to figure out the 'score' for each letter.
//  3. We want to accumulate scores for the whole word into a single variable.
function scrabble(word, values) {
    var total = 0;

    // todo: to lower case
    for (var i = 0; i < word.length; i++) {
        // Finding the score for each letter.
        // Only add points if there is a score defined.
        if (values[word[i]] !== undefined) {
            total += values[word[i]];
        }
        // Array notation for objects. Pass a string as the array index,
        // and that's the same as using dot notation with a property name.
        // values['f'] === values.f
    }

    return total;
}

var score = scrabble('finished', {
    a: 1,
    e: 1,
    i: 2,
    j: 3,
    o: 3,
    u: 1,
});

console.log(score);