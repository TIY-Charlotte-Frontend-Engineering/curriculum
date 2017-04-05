
/* Check to see if a password is strong enough */

let password = 'abc123';

// Rule #1: length of password must be greater than 8
if (password.length > 8) {
    console.log('Length check: success');
} else {
    console.log('Length check: FAIL');
}

// Rule #2: needs to start with the letter 'a'
// 'Indexing' is how we get individual elements from a list
if (password[0] === 'a') {
    console.log('The A Mandate: success');
} else {
    console.log('The A Mandate: FAIL');
}

// Rule #3: the number 2 needs to appear SOMEWHERE

// Loops
// Run a block of a code more than once. We keep track of each 'lap' using a 
// number that increases by one each time.
//
// Specify THREE things:
//  - Where to start the lap counter
//  - When to end 
//  - How much to increase by each time

let hasC = false;
//   (start)        (end)      (increase each time)
for (let count = 0; count < 6; count = count + 1) {
    // check if any of the characters are 'c', and if so console.log
    // a victory call
    if (password[count] === 'c') {
        hasC = true;
        console.log('WE FOUND IT');
    }
}

if (hasC) {
    console.log('The C: success');
} else {
    console.log('The C: FAIL');
}