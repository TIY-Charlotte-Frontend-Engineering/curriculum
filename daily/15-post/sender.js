
window.addEventListener('load', function () {
    getBooks();

    // 1. Add an event listener on the button
    let submitBtn = document.querySelector('#add-book');
    submitBtn.addEventListener('click', addBook);
    // 2. When the button is clicked, send a POST to create a new book on the server
});

function getBooks() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        // Loop over all the books and create an <li> for each one.
        let parent = document.querySelector('#books'); // our <ul>
        for (let i = 0; i < response.books.length; i++) {
            let el = document.createElement('li');
            el.textContent = response.books[i].title + ', by ' + response.books[i].author;
            parent.appendChild(el);
        }
    });
    request.send(); // send the request 'what books do you have?'
}

/**
 * Differences between GET and POST:
 * 
 *  1. open('POST', ...) instead of open('GET', ...)
 *  2. Usually don't care about the response
 *  3. Usually need to send data in the 'request body'
 */
function addBook() {
    let request = new XMLHttpRequest();
    request.open('POST', 'http://api.queencityiron.com/books');
    // Leave out the event listener because we don't need to do anything
    // on load, getBooks();

    // Add the body as a parameter to send().
    // JSON.stringify converts from JS to a string (opposite of JSON.parse)
    let body = JSON.stringify({
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
    });

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';

    request.send(body);
}