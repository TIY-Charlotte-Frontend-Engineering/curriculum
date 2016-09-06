import test from 'ava';

/**
 * Valid phone numbers are either 7 or 10 digits long. Users type a 
 * value into a text box that consists of 0-9, parentheses, dashes, 
 * and spaces. 
 * 
 * Return true if the provided input contains a valid phone number 
 * once all parentheses, spaces, and dashes have been stripped out.
 * Return false if it doesn't.
 */
// input needs to be 7 or 10 digits
// if it is one of those, return true. otherwise return false.
// ignore spaces, dashes, and parentheses (count only digits)
function phone(input) {
    // Split into character array
    let chars = input.split('');

    let digits = chars.filter(function (current) {
        if (parseInt(current) >= 0) {
            return true;
        } else {
            return false;
        }
    });

    if (digits.length === 7 || digits.length === 10) {
        return true;
    } else {
        return false;
    }
}

test(function (current) {
    current.deepEqual(phone('111 222 3333'), true);
    current.deepEqual(phone('111---------22 2 33 33'), true);
    current.deepEqual(phone('(111) 222-3333'), true);
    current.deepEqual(phone('----'), false);
    current.deepEqual(phone('11 44 55'), false);
});