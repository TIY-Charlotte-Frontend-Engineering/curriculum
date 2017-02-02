/**
 * A 'promise' is kinda like what we use it for in English: we don't have
 * something done YET but we'll do what we say once its done.
 * 
 * Promises are alternatives to callbacks, and were introduced into 
 * Javascript in ES6.
 * 
 * One of the major reasons we use callbacks is we need to call a function 
 * later (when something else finishes). Often this is asynchronous (meaning
 * its happening as our program keeps running).
 */

// window.addEventListener('load', function () {
//     const button = document.querySelector('#submit');
//     // click event listener
//     button.addEventListener('click', function () {
//         const req = new XMLHttpRequest();
//         req.open('...');
//         // When the ajax request comes back.
//         req.addEventListener('load', function () {
//             // create a new button with a callback
//             const newButton = document.createElement('button');
//             newButton.addEventListener('click', function () {

//             });
//         });
//     });
// });


// Alternative: promises 
// .then() is a property of all promises. This is how you should specify what happens
// next.
console.log('good day');
console.log('hello');
// $http.get()
//     .then(func1) // JSON.parse
//     .then(func2) // update dom
//     .then(func3); // add event listeners to new buttons

// Making a promise in Javascript (as of ES6).
// We pass in a function to the constructor, and the function needs to do one of two things:
//  1. work
//  2. not work

const getBooks = new Promise(ajaxBooks);

// getBooks is a Promise object (see constructor above).
// Every step of the promise (every then() statement) we can return something to pass it to the next
// then() step.
getBooks.then(function (results) {
    return results.books; // 'results' are coming from 'response' in the ajaxBooks() function.
}).then(function (books) {
    console.log(books);
}).catch(function () {
    console.log("FAIL");
});

getBooks
    .then(results => results.books)
    .then(books => console.log(books))
    .catch(() => console.log("FAIL"));










/* Ajax request to get books */
/* Functions we're making promises on have to either call 'worked()' or 'didntWork()' */
function ajaxBooks(success, failure) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function () {
        const response = JSON.parse(request.responseText);
        success(response); // 'response' is what we want to pass on to the next then().
    });
    request.send();
}