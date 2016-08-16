// Create and insert a new block into the DOM.
function createBlock() {
    let colors = ['red', 'blue', 'black', 'yellow'];
    // Randomly choose an index from the array.
    // Math.random() gives us a number from 0 - 1
    // Multiply it by the length of the array to scale it up,
    // then round down.
    let chosen = Math.floor(Math.random() * colors.length);

    // Create a new div
    // Have a 'block' class
    // Have a 'red' class 
    // Add it to the body
    let youngster = document.createElement('div');
    youngster.classList.add('block');
    youngster.classList.add(colors[chosen]);
    youngster.addEventListener('click', function () {
        youngster.classList.add('hidden');
    });
    
    // Find a parent
    let parent = document.querySelector('body');
    // Adopt
    parent.appendChild(youngster);
}

// Start your engines.
window.addEventListener('load', function () {
    // Select elements using CSS syntax
    // document.querySelector = first thing that matches
    //      Returns an element
    // document.querySelectorAll = ALLLLLL things that match
    //      Returns an array of elements
    // let blocks = document.querySelectorAll('.block');

    // // Loop through all of the elements.
    // for (let i = 0; i < blocks.length; i++) {
    //     // What do we want to do to each one? Add a click
    //     // listener.
    //     blocks[i].addEventListener('click', function () {
    //         console.log('you clicked box ' + i);
    //         // .remove() is 'remove me'
    //         // blocks[i].remove();

    //         // If hidden, show it
    //         // If shown, hide it
    //         // if (blocks[i].classList.contains('hidden')) {
    //         //     blocks[i].classList.remove('hidden');
    //         // } else {
    //         //     blocks[i].classList.add('hidden');
    //         // }
    //         // To add a class:
    //         blocks[i].classList.add('hidden');
    //         // To remove a class:
    //         // blocks[i].classList.remove('red');
    //         console.log('nevermore');
    //     });
    // } // end of my for loop

    for (let i = 0; i < 4; i++) {
        createBlock();
    }

    // New tidbit! Run a function every x milliseconds.
    // setInterval(what to do, how often)
    setInterval(createBlock, 1000);
});