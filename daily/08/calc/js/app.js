/**
 * FUNCTIONS
 * Chunks of code with names attached. Kinda like a recipe.
 *
 * function <name>(<parameters>) {
 *   ...your code...
 *   <return (sometimes)>
 * }
 */


/**
 * Accepts one character, returns true or false depending on
 * whether that character is a vowel.
 */
function isVowel(char) {
    // Array version
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(char) > -1;

    // Non-array version
    if (char === 'a') {
        return true;
    }
    if (char === 'e') {
        return true;
    }
    if (char === 'i') {
        return true;
    }
    if (char === 'o') {
        return true;
    }
    if (char === 'u') {
        return true;
    }

    return false;
}

function omega(cat, dog) {
    function zeta(cat, dog) {
        return cat + dog;
    }

    return zeta(7, 3);
}

/*
function squabble(first, second) {
    console.log('RUNNING A FUNCTION');
    //    return first + (second * second);
}
*/
function log(operation) {
    console.log('Running ' + operation + ' at this exact moment.');
}

/**
 * Gets an HTML ID and returns the integer version of it's value.
 */
function getNumber(id) {
    var element = document.getElementById(id);
    var num = parseInt(element.value);

    return num;
}

/**
 * Takes in an HTML ID as its input and returns true or false
 * describing whether the provided element is checked.
 */
function operate(id) {
    // id = 'addition'    
    var element = document.getElementById(id);

    if (element.checked) {
        return true;
    } else {
        return false;
    }

    // return element.checked;
}

/**
 * Takes one number as a parameter and updates the UI with that
 * value.
 */
function update(num) {
    document.getElementById('answer').textContent = num;
}


window.addEventListener('load', function () {
    function mathIt(num1, num2) {
        var sum = num1 + num2;
        return sum;
    }

    mathIt(7, 4);
    // Step 1: get the 'Calculate' button and add a click event
    //      listener.
    // Step 2: In that listener, get num1 (as integer) and num2
    //      (also as integer).
    // Step 3: Determine what operation they want me to do with
    //      them (add, sub, mul, div).
    // Step 4: Do that operation and then update the DOM with
    //      the result.
    var button = document.getElementById('calc');
    button.addEventListener('click', function () {
        var num1 = getNumber('first');
        var num2 = getNumber('second');

        var result = 0;

        // Operations
        if (operate('addition')) {
            // i need to add
            result = num1 + num2;
            log('addition');
        }
        if (operate('subtraction')) {
            // i need to subtract
            result = num1 - num2;
            log('subtraction');
        }
        if (operate('multiplication')) {
            // i need to multiply
            result = num1 * num2;
            log('multiplication');
        }
        if (operate('division')) {
            // i need to divide
            result = num1 / num2;
            log('division');
        }

        update(result);
    });
});