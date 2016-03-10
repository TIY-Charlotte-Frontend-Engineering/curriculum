// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, threshold) {
    var keepers = [];

    /**
     * 'Run a block of code multiple times. At the beginning,
     * create a new variable called i, and increment it by
     * one after each iteration. Keep running until i >=
     * words.length.`
     *
     * for(<start>; <end>; <each>) {
     *   <code to loop through>  
     * }
     *
     * i++ => i = i + 1
     */
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > threshold) {
            // keep it
            keepers.push(words[i]);
        }
    }

    // return an array that contains only longer words
    return keepers;
}