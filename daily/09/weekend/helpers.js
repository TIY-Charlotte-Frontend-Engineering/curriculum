/**
 * Create a few functions that will make it easier to format the tests I want to run.
 *
 */
function check(input, output) {
    if (typeof (input) === 'number' && typeof (output) === 'number') {
        return input === output;
    } else {
        if (input.length !== output.length) {
            return false;
        }

        for (var i = 0; i < input.length; i++) {
            if (input[i] !== output[i]) {
                return false;
            }
        }

        return true;
    }
}

function register(name, output, expected) {
    var working = check(output, expected);
    var test = document.createElement('section');

    var label = document.createElement('div');
    // This is a 'ternary operator', basically just condenses simpler
    // if-else statements into a single line.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    label.classList.add(working ? 'success' : 'failure');
    label.classList.add('status');
    label.innerHTML = working ? '&#10003;' : '&#128683;';

    var nameSection = document.createElement('div');
    nameSection.textContent = name;
    nameSection.classList.add('name');

    test.appendChild(label);
    test.appendChild(nameSection);

    document.getElementById('tests').appendChild(test);
}