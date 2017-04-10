/**
 * Primitives are data types that hold one piece of info. Examples: number, boolean,
 * string, undefined.
 * 
 * The alternative would be 'complex' data (multi-part), and JS has one: objects.
 * Arrays are an example of a type of object, but we can create our own types as
 * well.
 */

let song1Name = 'My Heart Will Go On';
let song1Artist = 'Celine Dion';
let song1ReleaseDate = 1996;
let song1Favorite = true;

let song2Name = 'All Coming Back to Me';
let song2Artist = 'Celine Dion';
let song2ReleaseDate = 1997;
let song2Favorite = true;

// Arrays are used for holding multiple instances of things. For example: multiple
// songs in a playlist, multiple students in a class, days in a week, items in a
// shopping basket.

// Objects are used for holding multiple pieces of data related to a single thing.
// Examples: book with title and author, song with info above, person with name
// password and age, etc.

let songs = []; // create array with square brackets

let song1 = {
    name: 'My Heart Will Go On',
    artist: 'Celine Dion',
    releaseDate: 1996,
    favorite: true,
}; // create an object with squigglies (curly braces)

let song2 = {
    name: 'I Wanna Dance with Somebody',
    artist: 'Celine Dion',
    releaseDate: 1994,
    favorite: false,
}; // create an object with squigglies (curly braces)

songs.push(song1); // add item to end of array
songs.push(song2); // add item to end of array

for (let current = 0; current < songs.length; current++) {
    console.log(songs[current].name); // How do I print out the name of the song?
}

// How do I mark song2 as a favorite?
song2.favorite = true;

// Question: how to we loop over this line below, once per song?
console.log(song1.name + ', by ' + song1.artist);

// Challenge: write a function that returns the number of years since a
// song was released. You can hard-code in 2017.
//
// Input: song (object)
// Output: number (years)

function age(song) {
    let years = 2017 - song.releaseDate;
    return years;
}

let age1 = age(song1); // 21
let age2 = age(song2); // 23

for (let i = 0; i < songs.length; i++) {
    console.log(songs[i].name + ' is ' + age(songs[i]) + ' years old');
}


// Creating a game with animals in it.
// let sparky = {
//     age: 7,
//     hunger: 0,
//     name: 'Sparky',
//     sick: false,
// };

// let fielding = {
//     age: 10,
//     hunger: 0,
//     name: 'Fielding',
//     sick: false,
// };

// This function creates a new animal object.
function makeAnimal(name, age) {
    return {
        name: name,
        age: age,
        sick: false,
        hunger: 0,
    };
}

let sparky = makeAnimal('Sparky', 7);
let fielding = makeAnimal('Fielding', 10);

// Challenge: write a function that returns a deck of cards, where a 'deck'
// is an array and a card is an object with a suit (heart, clubs, diamond, spade)
// and a value (2-10, J, Q, K, A).

// Output should be an array of 52 card objects.

function buildDeck() {
    // Step 1: create an empty deck
    let deck = [];

    // Step 2: create list of all suits
    let suits = ['hearts', 'clubs', 'diamonds', 'spades'];

    // Step 3: create list of all values
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    
    // Step 4: iterate over each combo and create an object for each, add to deck
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            let card = {
                suit: suits[s],
                value: values[v],
            };

            deck.push(card);
            // deck.push({
            //     suit: suits[s],
            //     value: values[v],
            // });
        }
    }

    // Step 5: return deck
    return deck;
}

let d = buildDeck();
console.log(d);

// This time we have two types of objects: a store and an item. The store has an
// amount of money and an inventory of items. An item has a name and a price.
//
// 1. Write a makeItem() function
// 2. Create a store object with several items and some money
// 3. Make a buy() function that removes the purchased item from the store and
//    adds the price to the store's money.
//        Inputs: store object and item object
//        Output: none

function makeItem(itemName, itemPrice) {
    return {
        name: itemName,
        price: itemPrice,
    };
}

let cheese = makeItem('cheese', 1.58);
let strawberries = makeItem('strawberries', 6.98);

let store = {
    money: 100,
    items: [cheese, strawberries], // array!
    // items: [ 
    //     makeItem('cheese', 1.58),
    //     makeItem('strawberries', 18.58),
    //     makeItem('goat cheese', 41.58),
    //     makeItem('tractor oil', 12.58),
    // ],
};

console.log(store.items[0].price);

function buy(store, item) {
    store.money = store.money + item.price;

    // Remove the item from the store
    // splice() will do this; we need to know the index of the item
    for (let i = 0; i < store.items.length; i++) {
        // doozy: 'if this items name is the one we're searching for...'
        if (store.items[i].name === item.name) {
            store.items.splice(i, 1); // delete one item, starting at i
            return; // no need to finish the loop; our work is done
        }
    }
}

// store should have two items, $100
console.log(store);
buy(store, strawberries);
// store should have one item, $106.98
console.log(store);