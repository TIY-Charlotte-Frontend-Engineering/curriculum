// Import a module. We'll cover modules in depth next week.
import test from 'ava';

function potion(element, symbol) {
    // Check if symbol has two letters
    if (symbol.length !== 2) {
        return false;
    }

    // All letters in symbol exist in element
    let first = symbol[0]; // M
    let second = symbol[1]; // y

    // If the first letter of the symbol doesn't exist in the element, FAIL.
    if (element.indexOf(first) === -1) {
        return false;
    }

    // If the second .........., FAIL.
    if (element.indexOf(second) === -1) {
        return false;
    }

    // Letter 1 should have a lower index than letter 2
    if (element.indexOf(first) > element.indexOf(second)) {
        return false;
    }

    return true;
}

// test() function creates a test
test('symbol must be two characters', function (current) {
    // Expectation #1: potion('Mercury', 'M') will return false
    current.deepEqual(potion('Mercury', 'M'), false);
    current.deepEqual(potion('Mercury', 'e'), false);
    current.deepEqual(potion('Mercury', 'Mmm'), false);

    current.deepEqual(potion('Mercury', 'My'), true);
    current.deepEqual(potion('Hydrogen', 'Og'), true);
});

test('characters must exist in element', function (current) {
    // Expectation #1: potion('Mercury', 'M') will return false
    current.deepEqual(potion('Mercury', 'Mx'), false);
    current.deepEqual(potion('Mercury', 'Mt'), false);
    current.deepEqual(potion('Mercury', 'Mc'), true);
});