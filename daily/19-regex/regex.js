/**
 * Regular expressions
 * 
 * Regular expressions (or regex) are a tool for finding patterns in strings.
 * The primary frontend use case is validating user input, but you can use
 * them for a ton of different things.
 * 
 * To use regular expressions in JS, we write the regular expression and
 * then create a RegExp object passing the regular expression as a string.
 * 
 *  let regexp = new RegExp("^\(?[0-9]{3}\)?-?[ ]*[0-9]{3}[- ]?[0-9]{4}$");
 * 
 * We can do a few things with it, the big two being:
 *      - test(str): does str match the pattern?
 *      - match(str): extracts information from the pattern
 */

// Note: you need to double any escape characters that you use!
// let pattern = new RegExp("^\\(?[0-9]{3}\\)?-?[ ]*[0-9]{3}[- ]?[0-9]{4}$");

// console.log(pattern.test("888 111 2222"));
// console.log(pattern.test("888-111-2222"));
// console.log(pattern.test("(888) 111-2222"));

// console.log(pattern.test("(888) 111-(2222)"));
// console.log(pattern.test("(888) 1-2222"));

// Returns a string; either 'strong', 'medium', or 'weak'
function strengthTest(pass) {
    // Challenge: write this
    let strong = new RegExp('^[a-zA-Z0-9]{8,}$');
    let medium = new RegExp('^[a-zA-Z]{5,}$');

    if (strong.test(pass)) {
        return 'strong';
    } else if (medium.test(pass)) {
        return 'medium';
    } else {
        return 'weak';
    }
    /**
     * The password must match ALL of these conditions to qualify.
     * 
     * Strong pass:
     *      8+ characters
     *      Lowercase + capital letters and at least one number
     *      No spaces
     * 
     * Medium:
     *      5+ characters
     *      Lowercase and capital letters
     *      No spaces
     */
}

window.addEventListener('load', function () {
    let textbox = document.querySelector('input');

    // keydown  = right before the key is pressed
    // keyup    = right after the key is pressed
    textbox.addEventListener('keyup', function () {
        let body = document.querySelector('body');
        let strength = strengthTest(textbox.value);

        // Remove all classes
        body.classList.remove('strong');
        body.classList.remove('medium');
        body.classList.remove('weak');

        // body.classList.add(strength);
        // Add back the right one
        if (strength === 'strong') {
            body.classList.add('strong');
        } else if (strength === 'medium') {
            body.classList.add('medium');
        } else {
            body.classList.add('weak');
        }
    });
});