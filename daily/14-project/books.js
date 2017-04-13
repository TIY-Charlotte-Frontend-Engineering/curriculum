/**
 * Generate the HTML we wrote by hand using Javascript.
 * If it never changes, keep it in HTML!
 * 
 * You should create an array of objects and use them
 * in your code.
 * 
 * PART THREE
 * 
 * Make a GET request to get the list of books from the
 * server (find a link to the the API in Slack). Render
 * that list instead of your list.
 */

let books = [
    {
        title: 'Say Cheese and Die',
        author: 'R. L. Stine',
        price: 9.78,
        cover: 'https://vignette1.wikia.nocookie.net/goosebumps/images/3/38/Say_Cheese_and_Die%21_%28Cover%29.jpg/revision/latest/scale-to-width-down/339?cb=20170205154147',
    },
    {
        title: 'The Curse of the Mummys Tomb',
        author: 'R. L. Stine',
        price: 4.54,
        cover: 'http://vignette2.wikia.nocookie.net/goosebumps/images/4/4f/The_Curse_of_the_Mummy%27s_Tomb_%28Cover%29.jpg/revision/latest?cb=20161024015635',
    },
    {
        title: 'Say Cheese and Die',
        author: 'R. L. Stine',
        price: 9.78,
        cover: 'https://vignette1.wikia.nocookie.net/goosebumps/images/3/38/Say_Cheese_and_Die%21_%28Cover%29.jpg/revision/latest/scale-to-width-down/339?cb=20170205154147',
    },
];

function showBook(book) {
    console.log('Showing book ' + book.title);

    let base = document.querySelector('main ul');
    let container = document.createElement('li');
    container.classList.add('book');

    // Cover image
    let pic = document.createElement('img');
    pic.setAttribute('src', book.cover);

    // Adding text elements
    let heading = document.createElement('h2');
    heading.textContent = book.title;

    let author = document.createElement('p');
    author.classList.add('author');
    author.textContent = book.author;

    let cost = document.createElement('p');
    cost.classList.add('price');
    cost.textContent = '$' + book.price;

    // Buttons
    let btnBuy = document.createElement('button');
    btnBuy.textContent = 'Buy';

    let btnBorrow = document.createElement('button');
    btnBorrow.textContent = 'Borrow';

    container.appendChild(pic);
    container.appendChild(heading);
    container.appendChild(author);
    container.appendChild(cost);
    container.appendChild(btnBuy);
    container.appendChild(btnBorrow);

    base.appendChild(container);
}

function getAllBooks() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://tiy-28202.herokuapp.com/books');
    req.addEventListener('load', function () {
        let data = JSON.parse(req.responseText);

        for (let i = 0; i < data.books.length; i++) {
            showBook(data.books[i]);
        }
    });

    req.send();
}

window.addEventListener('load', function () {
    // what to do when the page loads

    getAllBooks();

    // for (let i = 0; i < books.length; i++) {
    //     showBook(books[i]);
    // }
});
