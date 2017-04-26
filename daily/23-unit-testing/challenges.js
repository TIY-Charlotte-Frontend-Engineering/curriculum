/**
 * CHALLENGE 1: power bill
 * Same problem as the other day - DONT REFERENCE YOUR OLD CODE
 * 
 * The function receives a string as input that includes 
 * '1' (power on), '0' (power off), or '-' (no change). Return
 * the number of hours that the lights were on.
 * 
 * 
 * CHALLENGE 2: version numbers
 * There's a common technique for writing software version numbers
 * that consists of three parts: a major version number, minor version
 * number, and 'patch' number. For example:
 * 
 *  v1.2.1 is major version 1, minor version 2, patch version 1
 * 
 * Write a function that accepts two version numbers as strings and
 * return the later version number. If two versions have different major
 * version numbers, the larger number is the later version. If not, the
 * same comparison is done for minor version numbers, then patch version.
 */

import test from 'ava';

function power(bill) {
    let total = 0;
    let lightOn = false;

    if (typeof(bill) !== 'string') {
        return undefined;
    }

    for (let i = 0; i < bill.length; i++) {
        if (bill[i] === '1') {
            lightOn = true;
        }

        if (bill[i] === '0') {
            lightOn = false;
        }

        if (lightOn) {
            total++;
        }

        if (bill[i] !== '1' && bill[i] !== '0' && bill[i] !== '-') {
            return undefined;
        }
    }

    return total;
}

test('power bill', function (t) {
    t.deepEqual(power('----'), 0);
    t.deepEqual(power('-1--'), 3);
    t.deepEqual(power('10--'), 1);
    t.deepEqual(power(''), 0);
    t.deepEqual(power('1110-'), 3);
    t.deepEqual(power('1--0-1--'), 6);
});

test('invalid input', function (t) {
    t.deepEqual(power(8), undefined);
    t.deepEqual(power('10-x'), undefined);
})

