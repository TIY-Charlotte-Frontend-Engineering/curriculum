/**
 * Narcissistic number detector
 * 
 * A narcissistic number is a category numbers in recreational math that describes numbers
 * where each digit raised to the power of the number of digits added together gives you
 * the original number.
 * 
 *      153     =  1^3 + 5^3 + 3^3
 *      407     =  4^3 + 0^3 + 7^3
 *      1634    =  1^4 + 6^4 + 3^4 + 4^4
 *      54748   =  5^5 + 4^5 + 7^5 + 4^5 + 8^5 
 * 
 * Highly practical and a hit at dinner parties! Write a function that returns true if a
 * number is narcissistic and false otherwise.
 */

// Math.pow()
// Run a for loop from 1 - 1M and find all narcissistics

function narcis(num) {
    // 1. convert number to string, split string into digits
    // 2. for loop over all the digits, Math.pow() each one
    // 3. add them all together
    // 4. if num === sum of all numbers, return true
    const digits = num.toString().split('');
    let total = 0;

    for (let i = 0; i < digits.length; i++) {
        total += Math.pow(parseInt(digits[i]), digits.length);
    }

    /* Return true if narcissistic, false otherwise */
    return total === num;
}

console.log(narcis(153));

for (let i = 0; i < 1000000; i++) {
    if (narcis(i)) {
        console.log(i);
    }
}