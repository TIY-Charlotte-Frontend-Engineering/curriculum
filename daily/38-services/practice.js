/**
 * Anagram detector
 * 
 * Given two strings, return true if they are anagrams and false otherwise. Ignore
 * spaces and capitalization.
 */

import test from 'ava';

function anagram(first, second) {
    // 1. split each word into letters
    // 2. check that each word has the same # of each character
    //      => check to make sure lengths are the same
    //      => normalize to lowercase
    //      => get rid of spaces
    //      => sort the array to normalize the order of letters
    //      => join them back together

    let firstLetters = first                // string
        .toLowerCase()                      // string
        .split('')                          // array
        .filter(char => char !== ' ')       // array
        .sort()                             // array
        .join('');                          // string
    
    // let firstLetters = first.split('').filter(function (char) {
    //     return char !== ' ';
    // });
    let secondLetters = second
        .toLowerCase()
        .split('')
        .filter(char => char !== ' ')
        .sort()
        .join('');

    return firstLetters === secondLetters;
}


/* Tests */
test('accepts the acceptable', t => {
    t.deepEqual(anagram('That', 'Hatt'), true);
    t.deepEqual(anagram('that', 'hatt'), true);
    t.deepEqual(anagram('Clint Eastwood', 'Old West Action'), true);
    t.deepEqual(anagram('Test me', 'Mesett'), true);
});

test('rejects the rejects', t => {
    t.deepEqual(anagram('Reddit', 'Eat dirt'), false);
    t.deepEqual(anagram('Abc', 'def'), false);
})