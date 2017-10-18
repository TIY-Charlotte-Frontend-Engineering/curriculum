/**
 * ROSEBUD
 * 
 * Some say that there was a cheat code for the original Sims that involved typing the 
 * phrase 'rosebud' followed by some number of exclamation points, followed by a 1. The 
 * cheat code would give one thousand credits for each exclamation point. Write a function 
 * that, when passed a string, returns the number of credits that the Sims would be 
 * rewarded with.
 * 
 * rosebud('rosebud!!!!1'); // returns 4000
 * rosebud('rosebud!1'); // returns 1000
 * rosebud('rosebud!!!'); // returns 0
 * rosebud('heathcliff'); // returns 0
 */

// import test from 'ava';

function rosebud(code) {
    // 1. regex - check it starts with rosebud, if so then loop through code[7] onward
    // 2. for loop over first 7 letters, check for rosebud. if its there, check for ! for the rest
    // 3. regex for the whole thing
    let credits = 0;
    let regex = new RegExp('^rosebud!+1$');
    let valid = regex.test(code);

    if (valid === true) {
        credits = (code.length - 8) * 1000;
    }
        // for (let i = 0; i < code.length - 1; i++) {
        //     // if valid is true, then count the number of !'s and add 1000 to credits
        //     // If we hit something other than an !, cheat code is invalid
        //     if (code[i] !== '!') {
        //         return 0;
        //     } else {
        //         credits = credits + 1000;
        //     }
        // }
    return credits;
}

console.log(rosebud('rosebud!!!1')); // should return 3000, it works