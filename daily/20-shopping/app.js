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
        price: displayPrice(product.price),
    });

    let button = child.querySelector('button'); // coming back
    button.addEventListener('click', function () {
        console.log('clicked on '+ product.title);
        cart.push(product);
        showCart();
    });

    parent.appendChild(child);
}

// Show the entire cart in the DOM
function showCart() {
    let cartList = document.querySelector('#cart ul');
    cartList.innerHTML = ''; // clear away all items

    // Loop through each item in the cart 
    for (let i = 0; i < cart.length; i++) {
        showCartItem(cart[i]);
    } 

    // update the total 
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal = subtotal + cart[i].price;
    }

    // add this number to the dom
    document.querySelector('#cart-subtotal').textContent = displayPrice(subtotal);
    document.querySelector('#cart-tax').textContent = displayPrice(subtotal * 0.1);
    document.querySelector('#cart-total').textContent = displayPrice(subtotal + (subtotal * 0.1));
}

function showCartItem(item) {
    // create a new <li>
    // populate it with mustache template
    // add it to dom 
    let child = document.createElement('li');
    let parent = document.querySelector('#cart ul');
    let template = document.querySelector('#cart-template');

    // right here
    child.innerHTML = Mustache.render(template.innerHTML, {
        bookName: item.title,
        price: displayPrice(item.price),
    });

    parent.appendChild(child);
}

/**
 * Pass in a price, get back the string we want to display 
 * for this price.
 * - Round
 * - Two decimals
 */
function displayPrice(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
}