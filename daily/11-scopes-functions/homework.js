console.log('04 | findLargest');

function findLargest(nums) {
    let largest = 0;

    for (let i = 0; i < nums.length; i++) {
        // if the current number is bigger than the current largest
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }

    return largest;
}
/**
 * Find the second largest number in an array.
 * 
 * Input: array of numbers
 * Output: second largest number
 */
function secondLargest(nums) {
    let largest = findLargest(nums);

    // 2. Remove largest
    // If we want to splice, we need to know the index that we want to delete.
    // Easy way to find the index of a given element: indexOf()
    // let target = nums.indexOf(largest); // find the index of the largest number 
    // nums.splice(target, 1);             // get rid of the largest number

    let smaller = []; // all of the numbers except for the largest
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== largest) {
            smaller.push(nums[i]); // push() is an array operation that means 'add to'
        }
    }

    largest = findLargest(smaller);

    return largest;
}

let junior = secondLargest([2, 7, 14, 3, 8]);
console.log(junior);


console.log('05 | containsVowel');
/**
 * 
 * Inputs: a string to check
 * Output: boolean value (is there a vowel?)
 */
function containsVowel(words) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // 1. check each letter of the string 
    for (let i = 0; i < words.length; i++) {
        // 2. check if current letter is one of the 'vowel' characters
        for (let j = 0; j < vowels.length; j++) {
            // 3. return true if we find one
            if (words[i] === vowels[j]) {
                return true;
            }
        }
    }

    return false;
}

let isVowely = containsVowel('house');
console.log(isVowely);

console.log('06 | piglatin');

function piglatin(phrase) {
    // 1. break phrases into words
    let words = phrase.split(' '); // pass in the character to split on

    // 2. break each word into letters (optional)
    for (let i = 0; i < words.length; i++) {
        // let word = words[i];
        // word[0] // first letter of current word 

        // 3. remove first letter and move it to the end
        // 4. concatenate 'ay'
        // 5. put all the words back together into a single sentence
        //            ello                j             ay
        words[i] = words[i].slice(1) + words[i][0] + 'ay'; 
    }

    console.log(words);
    // Note: you could use join() instead of this loop if you want
    // console.log(words.join(' '));
    let output = ''; // the string that we provide as the answer
    // convert the array into a string
    for (let i = 0; i < words.length; i++) {
        // after first iteration: 'eachesbay '
        // after second iteration: 'eachesbay reaay '
        // ...
        output = output + words[i] + ' ';
    }

    // return a string
    return output;
}

console.log(piglatin('jello')); // ellojay
console.log(piglatin('beaches are for swimming')); // eachesbay reaay orfay wimmingsay

console.log('08 | divisors');

function divisors(max) {
    // 1. create a empty array 
    let nums = [];

    // 2. iterate 1 - max 
    for (let i = 1; i <= max; i++) {
        // If the input is evenly divisible by i, keep it
        if (max % i === 0) {
            nums.push(i);
        }
    }

    // return an array of numbers
    return nums;
}

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(20)); // [1, 2, 4, 5, 10, 20]