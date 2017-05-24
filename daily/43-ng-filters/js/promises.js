/**
 * Back in the day...
 * 
 * CALLBACK FUNCTIONS
 * A function whose purpose is to be called back later.
 * 
 */

[1, 2, 3].map(function (num) {

});

// The second parameter is a callback function.
window.addEventListener('load', function () {
    button.addEventListener('click', function () {
        const request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            for (let i = 0; i < response.length; i++) {
                button.addEventListener('click', function () {

                });
            }
        });
    });
});

const request = new XMLHttpRequest();
request.open('GET', 'http://randomuser.com');
request.addEventListener('load', function () {

});
request.send();

fetch('http://randomuser.com')
    .then(function () {

    })
    .then(function () {

    })
    .then(function () {

    });

/**
 * A promise is a tool for organizing asynchronous code. 'Async' code is code
 * that runs out of order (events, ajax requests, etc that take an unknown
 * amount of time).
 * 
 * A promise is designed to take callbacks (zigzags) and make them top-to-bottom
 * instead. This is much easier to read and debug.
 * 
 * Promises are objects that have two built-in functions.
 *  1. then() - the thing that happens next, always a function
 *              runs when the previous step was successful
 *  2. catch() - the thing that happens when something goes wrong
 */

$http.get('http://randomuser.com')
    .then(function (response) {
        // request succeeded
    })
    .catch(function () {
        // something went wrong; display a message in the dom or something
    });