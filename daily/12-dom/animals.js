
console.log('Hello!');

/**
 * One of the most common operations we perform
 * on the frontend is 'modifying the DOM' - or
 * adding / changing / removing what show up
 * on the screen.
 * 
 * We can do this at different times:
 *  - When the server tells us a new email came
 *    in, add a new row to the 'inbox' element
 *  - When the user scrolls near the bottom of
 *    the page, add new stuff to the news feed
 *  - When users click a button, change what
 *    they see.
 * 
 * All of these triggers are called 'events'.
 */

function makeNoise() {
    console.log('moo');

    let mooHeader = document.querySelector('header h1');
    mooHeader.textContent = 'MOO';
}

function init() {
    console.log('page is loaded');

    // Goal: change the text 'cow' to 'goat'
    //
    // document.querySelector() gets an EXISTING element
    // from the page. Pass a CSS selector as the first
    // argument.
    let target = document.querySelector('.cow p');
    target.textContent = 'Goat'; // change words inside

    let button = document.querySelector('.cow button');
    button.addEventListener('click', makeNoise);

    // CHALLENGE: instead of console.log'ing, change the
    // header text to the all caps animal noise

    /**
     * target is an HTML element, and there are TONS of
     * things we can do to HTML elements.
     *  - change text content
     *  - add / remove classes
     *  - add id
     *  - add / remove child elements
     *  - etc
     */
}

// window = the tab your app is running on
// document = the page itself within the window
window.addEventListener('load', init);

console.log('Animals');