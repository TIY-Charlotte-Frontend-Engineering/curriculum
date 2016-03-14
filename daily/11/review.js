// A practice function to use in our functions below
function big(num) {
    return num > 15;
}

// https://lodash.com/docs#some
// Returns true if any element passes the predicate check, else false.
// some([5, 7, 3, 30], function)
function some(items, test) {
    // Take the array of items and compare each one to the func `big`
    // If func is true, return true. If func is false, keep rollin
    for (var i = 0; i < items.length; i++) {
        if (test(items[i])) {
            return true;
        }
    }

    return false;
}

// Returns true if all elements pass the predicate check, else false.
function every(items, test) {
    for (var i = 0; i < items.length; i++) {
        if (!test(items[i])) {
            return false;
        }
    }

    return true;
}

function negate(test) {
    // Return a function that's gonna return true all the time.
    return function (val) {
        return !test(val);
    };
}