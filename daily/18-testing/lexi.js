//import test from 'ava';

//1. Write out TESTS
//2. Wtite our FUNCTION

// test('Contains vowel', function(trial) {

//     //Test driven development' is the current hotness in the testing world, which means to write tests first, then write functions.

//     trial.is(containsVowel('hey'), true);
//     trial.is(containsVowel('hz'), false);
//     trial.is(containsVowel(''), false);
//     trial.is(containsVowel(5), false); //weirdo because they are passing a number instead of string
//     trial.is(containsVowel('heeeeeeeeyyyyyyyyyyyyyyyya'), true);
// });


//Write a function called containsVowel that takes a single string and returns true if there is at least one value or false otherwise.

// function containsVowel(string) {
//     let vowel = ['a', 'e', 'i', 'o', 'u']

//     for(let i = 0; i < string.length; i++) {
//         for(j = 0; j < vowel.length; j++) {
//             if (string[i] === vowel[j]) {
//                 return true;
//             } 
//         }
//     }

//     return false;
// }

// containsVowel('hey'); 


//--------------------------------------------------------------------------------------------------------------------------------------------------


import test from 'ava';

// Write a function called pokemon that accepts an array of numbers. Each element in the array represents a day, and the number represents the number of Pokemon caught on that day. Return an array of the same length that contains the number of total Pokemon caught up to that day.
// For example, pokemon([1, 2, 5, 1, 3]); // returns [1, 3, 8, 9, 12]

test('pokemon', function(trial) {
     trial.deepEqual(pokemon([1, 2, 5, 1, 3]), [1, 3, 8, 9, 12]);
     trial.deepEqual(pokemon([1, 4, 7, 10, 14]), [1, 5, 12, 22, 36]);
     trial.deepEqual(pokemon([1, 0, 7, 10, 0]), [1, 1, 8, 18, 18]);
     trial.deepEqual(pokemon([1, -1, 7, 10, -3]), [1, 0, 7, 17, 14]);
     trial.deepEqual(pokemon([0, 0, 0, 0, -3]), [0, 0, 0, 0, 0]);
     trial.deepEqual(pokemon([1, -1, 7]), [1, 0, 7]);
     trial.deepEqual(pokemon([1, -1, 7, 10, -3, 20, 2]), [1, 0, 7, 17, 14, 34, 36]);
});

function pokemon(array) {
    let count = 0;
    let caught = [];
    for(let i = 0; i < array.length; i++) {
        count = array[i] + count;
        //console.log(count);
        caught.push(count);
        //console.log(caught);
    }
    
    return caught;
}

// let answer = pokemon([1, 2, 5, 1, 3]);
// console.log(answer);