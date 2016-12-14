/**
 * Two built-in objects that exist on all pages.
 * 
 * window   =   the tab (parent)
 * document =   the page (child)
 */

/**
 * An 'event listener' is a function that waits for an event 
 * to occur before running.
 * 
 * We provide two things:
 *  - The event name we want to listen for (there are lots)
 *  - What function we want to run when it happens
 */

function init() {
    // querySelector() is how we find elements that already exist
    // one parameter: a CSS selector for the element you're looking for
    let button = document.querySelector('#add');
    // Anonymous functions: functions without names
    button.addEventListener('click', function () {
        // 1. Get the text in the text box
        let textBox = document.querySelector('input');
        // value is a property that <input> elements have
        // textBox.value = textBox.value + ' sounds amazing!'; 

        // 2. Create a new <li>
        let child = document.createElement('li'); // parameter = element type
        child.textContent = textBox.value; // textContent is the text between <li> and </li>

        let header = document.createElement('h2');
        header.addEventListener('click', function () {
            console.log('wow what a cool person');
        });
        header.textContent = 'Noah the Cool Person';
        child.appendChild(header); // child = the <li>, header = the <h2>

        if (textBox.value[0].toLowerCase() === 'k') {
            child.classList.add('highlight'); // classList is sort of like an array
        }

        textBox.value = '';

        // 3. Add the <li> to the <ul>
        let parent = document.querySelector('#list'); // the <ul>
        parent.appendChild(child);  // add the child element to the parent
                                    // someone will forget this

        console.log('clicked');
    });
}

window.addEventListener('load', init);