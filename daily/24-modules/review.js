import test from 'ava';

/**
 * longx
    Write a function that accepts one parameter: a sequence (string). 
    Return the length of the longest continuous string of x's.
    For example, abxxaxterxtxxxa should return 3.
 */

function longx(letters) {
    // 1. create a total variable - count x's in sequence
    // 2. create a max variable - length of longest sequence
    // 3. loop over all letters
    // 4. looking for x's. 
    //      total++ if we find
    //      if its biggest total, save to max, then reset total
    // 5. return max
    let total = 0;
    let max = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'x') {
            total++;
        } else {
            // if statement MUST BE before total = 0
            if (total > max) {
                max = total;
            }

            total = 0;
        }
    }

    // Add this to check the very last run
    if (total > max) {
        max = total;
    }

    return max;
}

test('longx', function (t) {
    t.deepEqual(longx('abxxaxterxtxxxa'), 3);
    t.deepEqual(longx('txxxxpxxo'), 4);
    t.deepEqual(longx('pxxxx'), 4);
    t.deepEqual(longx('abc'), 0);
    t.deepEqual(longx(''), 0);
    t.deepEqual(longx('xxxpxx'), 3);
    t.deepEqual(longx('axxxpxxxw'), 3);
});

/**
 * guesswho

    Write a function that accepts one parameter: a set of func 
    (array). Return the numbers from 1-100 that return true for 
    each of the functions in the array.
 */

function guesswho(ops) { // array of 'operations'
    // 1. create an array of numbers to keep
    // 2. loop over 1 - 100
    // 3. pass each number into each function in `ops`
    // 4. if all trues, push to array. if not, move on.
    let keepers = [];

    for (let num = 1; num <= 100; num++) {
        let valid = true; // if this stays true, push the num

        for (let i = 0; i < ops.length; i++) {
            let success = ops[i](num);

            if (!success) {
                valid = false;
            }
        }

        if (valid) {
            keepers.push(num);
        }
    }

    return keepers;
}

test('guesswho', function (t) {
    let funcs = [
        function big(x) { return x > 80; },
        function odd(x) { return x % 2 === 1; },
    ];

    t.deepEqual(guesswho(funcs), [81, 83, 85, 87, 89, 91, 93, 95, 97, 99]);
});