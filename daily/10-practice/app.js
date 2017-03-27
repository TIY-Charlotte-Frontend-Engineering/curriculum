/**
 * 07 | longestWord
 *
 * Write a function called longestWord that takes a single string and returns 
 * the longest word in the string.
 * 
 * Hint: look into the split() function that you can call on strings.
 */

function longestWord(sentence) {
    // 1. Convert sentence into an array 
    // 2. Search through the words for the largest letter count
    // 3. Once we've checked them all, return the longest one
    let words = sentence.split(' ');    // array of strings
    let longest = 0;                    // the length of the longest word so far
    let keeper = null;                  // the longest word itself

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {    // if this word is longer than longest so far
            longest = words[i].length;      // we have a new longest word
            keeper = words[i];
            console.log('found a new longest: ' + keeper);
        }
    }

    // return a string
    return keeper;
}

let winner = longestWord('sue is a noble person and scholar');
console.log(winner);

// split()
// let sentence = 'how much wood would a woodchuck chuck?'
// let words = sentence.split('.');

// let favWord = words[5];
// console.log(favWord);
// console.log(sentence.split('')); 


















/**
 * Problem #1: determine whether a string has more x's or o's.
 * Input: string
 * Return 'x' if more x's, or 'o' if more o's
 */

























/**
 * Problem #2: find all of the numbers from 1-max divisble by chunk
 * Input: max (number), chunk (number)
 * Return array of numbers 
 */


/**
 * Problem #3: find the greatest common divisor of two numbers
 *  (the largest number that both inputs can be evenly divided by)
 * Input: two numbers 
 * Returns number
 */




