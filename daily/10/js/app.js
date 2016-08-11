// Objects
let album_title = 'Soft Jamz';
let artist = 'Celine';
let top_song = 'Heart duh';
let publication_date = 1999;

// Object form of the above data
let album = {
    title: 'Soft Jamz',
    artist: 'Celine',
    top_song: 'Heart, duh',
    release: 1999,
};

let album2 = {
    title: 'Walking on the Sun',
    artist: 'Smash Mouth',
    top_song: 'All Star',
    release: 1997,
};

let playlist = [album, album2];

// 'Dot notation' is how we access PROPERTIES of OBJECTS.
// console.log(album.artist);
// console.log(album.release);

// Useful way to think about objects: arrays with names instead of numbers as
// indexes.
// console.log(playlist[1].title);

// Create a function with the name of 'subtotal'
// It requires one parameter called 'items'
function subtotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price * items[i].quantity;
    }

    // 'return' is how we define the output
    return total;
}

// Shopping cart.
let cart = [];

cart.push({
    name: 'Poached Olives',
    price: 5.14,    // price per jar of olives
    quantity: 2,
});

cart.push({
    name: 'Cornbread',
    price: 3.99,
    quantity: 1,
});

// 'Calling' subtotal and telling it to find the subtotal of 'cart'
let cost = subtotal(cart);
console.log(cost);
console.log(subtotal(cart));

// Functions