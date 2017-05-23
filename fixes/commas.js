/**
 * commas(num)
 * 
 * Write a function that accepts a number and returns that number with commas added in 
 * standard American style.
 * 
 * commas(1000); // returns '1,000'
 * commas(42000); // returns '42,000'
 * commas(1843583) // returns '1,843,583'
 */

import test from 'ava'; 

function commas(num) {
    // 1. convert to string, then split to array
    // 2. start at the back, splice in a comma every third spot
    // 3. join back into a string and return

    // 2
    let str = num.toString().split(''); 

    for (let i = str.length - 3; i > 0; i = i - 3) {
        // splice deletes stuff (second argument) and adds stuff (third and beyond)
        str.splice(i, 0, ',');
    }

    // 3
    return str.join('');
}

console.log(commas(1000))
console.log(commas(42000))
console.log(commas(1843583))
console.log(commas(231843583))

test('comma', function (t) {
    t.deepEqual(commas(1000), 1,000);
}); 