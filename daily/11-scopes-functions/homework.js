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