/**
 * 1. Load all the products (from Ajax)
 * 2. add a 'add to cart' button
 *      - when clicked, add to cart array
 * 3. show all items in cart 
 * 4. calculate subtotal, tax, and total in cart
 */

// let items = [
//     { // one book
//         title: 'Book A', 
//         author: 'Person 1', 
//         price: 100.20, 
//         cover: 'http://something.jpeg',
//     },
//     { // one book
//         title: 'Book B', 
//         author: 'Person 2', 
//         price: 15.00, 
//         cover: 'http://something.jpeg',
//     },
//     { // one book
//         title: 'Book C', 
//         author: 'Person 3', 
//         price: 21.15, 
//         cover: 'http://something.jpeg',
//     },
// ];

let cart = [];

window.addEventListener('load', function () {
    getProducts();
});

function getProducts() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        let books = response.books;

        // Show each one of these books
        for (let i = 0; i < books.length; i++) {
            showProduct(books[i]);
        }
    });
    request.send(); // dont forget!
}

/* Show the provided product in the DOM */
function showProduct(product) {
    // Create an <li>
    // Populate the <li> with Mustache output
    // Add to the parent
    let child = document.createElement('li');
    let parent = document.querySelector('#products ul');

    let template = document.querySelector('#product-template');

    child.innerHTML = Mustache.render(template.innerHTML, {
        bookName: product.title,
        authorName: product.author,
        price: product.price.toFixed(2),
    });

    parent.appendChild(child);
}