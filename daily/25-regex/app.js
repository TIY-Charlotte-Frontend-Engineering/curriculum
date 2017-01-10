/**
 * (Not so) Regular expressions!
 * 
 * Regular expressions are useful whenever we're trying to
 * find complex patterns in STRINGS. They are an age-old
 * mechanism for representing these patterns.
 */

window.addEventListener('load', function () {
    // Note: backslashes need to be doubled up because JS interprets the first one
    // and you need one more to stay in your regular expression.
    let email = new RegExp('^[a-zA-Z][a-zA-Z0-9]*@[a-z0-9\\.]+\\.(com|org|edu)$'); // regex in JS

    // add a keyup event listener
    // validate against a regex after each key is typed
    let textbox = document.querySelector('#email');
    textbox.addEventListener('keyup', function () {
        // 'if the value in the textbox matches the regular expression...'
        if (email.test(textbox.value) === true) {
            textbox.classList.add('valid');
            textbox.classList.remove('invalid'); // in case it was invalid before
        } else {
            textbox.classList.add('invalid');
            textbox.classList.remove('valid'); // in case it was valid before
        }
    });
});