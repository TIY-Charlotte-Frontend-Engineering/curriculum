/*
Two built-in objects that make up the DOM.
    - window
    - document 

We can add event listeners to any element using addEventListener().
There are a ton of different events like click, load, hover, etc.

We react to events using functions. These can be named or anonymous.

We can get individual elements from the DOM using document.getElementById().
Once we have an element, we can modify it to our heart's content. In particular, we
  - changed textContent
  - added event listeners
  - got the value of input elements

Be mindful of scopes. Use the most limited scope you can use while still solving your
problem. Future you will thank you.
*/

// function buyNoodles() {
//     console.log('buying pounds of noodles');

//     let noodleCount = document.getElementById('count');
//     noodleCount.textContent = 'Noodles acquired: 1';
// }

// function returnNoodles() {
//     console.log('take these back, please');

//     let noodleCount = document.getElementById('count');
//     noodleCount.textContent = 'Noodles acquired: 0';
// }

// When do we want something to happen?
// What do we want to happen?

// function loadApplication() {
//     console.log('hello');

//     // Set up two event listeners, each listening for 
//     // a click on a different button.
//     // document.getElementById() gets a single element using
//     //      its id
//     let buyBtn = document.getElementById('buyButton');
//     buyBtn.addEventListener('click', buyNoodles);

//     let returnBtn = document.getElementById('returnButton');
//     returnBtn.addEventListener('click', returnNoodles);
// }

// Create an 'event listener'. This just means we want to pay
// attention to when an event occurs, and run the loadApplication
// function when it does.
// Anonymous function = a function with no name
window.addEventListener('load', function () {
    console.log('hello');
    let cost = 1.16;
    let noodles = 0;

    // Set up two event listeners, each listening for 
    // a click on a different button.
    // document.getElementById() gets a single element using
    //      its id
    let buyBtn = document.getElementById('buyButton');
    buyBtn.addEventListener('click', function () {
        noodles = noodles + 1;
        console.log('buying pounds of noodles');

        let count = document.getElementById('count');
        count.textContent = 'Noodles acquired: ' + noodles;
        console.log(cost);
    });

    // Return the noodles back to the emporeum
    // addEventListener(event-type, what-to-do);
    let returnBtn = document.getElementById('returnButton');
    returnBtn.addEventListener('click', function () {
        if (noodles > 0) {
            noodles = noodles - 1;
            console.log('giving back noodles');
        }

        let count = document.getElementById('count');
        count.textContent = 'Noodles acquired: ' + noodles;
    });

    let totalBtn = document.getElementById('total');
    totalBtn.addEventListener('click', function () {
        // Multiply the number of noodles by the current price.
        let textBox = document.getElementById('price');
        let price = textBox.value; // special property of HTML elements

        console.log('Number of noodles: ' + noodles);
        console.log('Price per noodle (ppn): ' + price);

        console.log(noodles * price);
    });
});