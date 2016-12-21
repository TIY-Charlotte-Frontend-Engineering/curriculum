/* 
Similar to gulp, we need to run some third-party code for this to work. 

With gulp, we included require('gulp') at the top to pull it in (ES5 modules)
With ava, we'll include import test from 'ava' at the top to pull it in (ES6)

In this case its going to import the code for us to start writing tests!
*/
import test from 'ava';

function tallestMountain(heights) {
    if (heights.length === 0) {
        return null;
    }

    let tallest = heights[0]; // the tallest mountain at the beginning is the first mountain

    for (let i = 1; i < heights.length; i++) {
        if (tallest < heights[i]) { // if this mountain is taller than tallest so far
            tallest = heights[i];   // remember it #neverforget
        }
    }

    return tallest;
}

// 'Writing tests' is essentially writing functions that run our own code.
// The goal of writing tests is to try to break things.

// The test() function is built-in to ava and sets up a test.
test('Finds the tallest', function (trial) {
    // 1. create a new test
    // 2. set up different 'trials' that the test should evaluate
    // 3. example trial: check that the return value of containsVowels('hi') is TRUE
    trial.is(tallestMountain([5, 1, 8, 3]), 8);
    trial.is(tallestMountain([14, 1, 8, 3]), 14);
    trial.is(tallestMountain([14, 1, 8, 33]), 33);
    trial.is(tallestMountain([14, 33, 8, 33]), 33);

    // Issue!
    trial.is(tallestMountain([-1, -2, -15]), -1);
    trial.is(tallestMountain([-100, -2, -15]), -2);

    trial.is(tallestMountain([]), null); // not defined?

    // trial.is(tallestMountain([14, 'hello', 8, 33]), 33); // issue: answer isn't clear
});