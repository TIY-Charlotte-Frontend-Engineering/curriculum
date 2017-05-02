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
import test from 'ava';

function rosebud(code) {
    // 1. regex - check it starts with rosebud, if so then loop through code[7] onward
    // 2. for loop over first 7 letters, check for rosebud. if its there, check for ! for the rest
    // 3. regex for the whole thing
    let credits = 0;

    if (!code.startsWith('rosebud') || !code.endsWith('1')) {
        return 0;
    }

    for (let i = 7; i < code.length - 1; i++) {
        // If we hit something other than an !, cheat code is invalid
        if (code[i] !== '!') {
            return 0;
        } else {
            credits = credits + 1000;
        }
    }

    return credits;
}

function rosebud(code) {
    let regex = /^rosebud!+1$/;

    if (regex.test(code)) {
        return (code.length - 8) * 1000;
    } else {
        return 0;
    }
}

test('rosebud', function (t) {
    t.deepEqual(rosebud('rosebud!!!!1'), 4000);
    t.deepEqual(rosebud('rosebud!1'), 1000);

    t.deepEqual(rosebud('rosebud!!!x!1'), 0000);
    t.deepEqual(rosebud('rosebud!!!'), 0);
    t.deepEqual(rosebud('heathcliff'), 0);
    t.deepEqual(rosebud('osebud!1'), 0);
});




