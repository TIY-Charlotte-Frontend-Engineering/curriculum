console.log('#1: Tallest Mountain');

// let heights = [9.12, 5.60, 88.19, 1.14];

// console.log('#2: Hangman Lite');

console.log('#5: Palindromes');

// 1. Start from the beginning and look at each letter.
// 2. Compare the first letter to the last letter.
// 3. Compare the second to the second to last.
// 4. etc (loop?)
// 5. If any of them don't match, not a palidrome.

let word = 'atmma';
let end = word.length - 1;
let palindrome = true; // whether the word is a palindrome

for (let index = 0; index < word.length; index++) {
    // 'a'
    if (word[index] !== word[end - index]) {
        palindrome = false;
    }
}

console.log(palindrome);