
// Get all books known to man
// 1. Make a GET request
// 2. Loop through all the books and create li's
function getBooks() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:7000/books');
    request.addEventListener('load', function () {
        // responseText is a property of the request object
        // (that name was chosen for us)
        let response = JSON.parse(request.responseText);
        let books = response.books;
        let parent = document.querySelector('main ul');

        for (let i = 0; i < books.length; i++) {
            let element = document.createElement('li');
            element.textContent = books[i].title;

            // append to parent
            parent.appendChild(element);
        }
    });
    request.send();
}

// Add a new book
// Make a POST request
// Differences:
//   1. (maybe) URL
//   2. Method becomes 'post' instead of 'get'
//   3. Pass a request body
function addBook(book) {
    // object with 'title' and 'author' properties

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:7000/books');
    request.addEventListener('load', function () {
        // remove everything
        getBooks();
    });
    request.send(JSON.stringify(book));
}

window.addEventListener('load', function () {
    getBooks();

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function () {
        addBook({
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
        });
    });
});
