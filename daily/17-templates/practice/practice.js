
// once we have the element, we can call:
//  classList.add('even')

// Need to wait for the page to load since I'm
// messing with the DOM.
window.addEventListener('load', function () {
    let elements = document.querySelectorAll('div.row');

    for (let i = 0; i < elements.length; i++) {
        // if i is even, add even class
        // else add odd class
        if (i % 2 === 0) {
            elements[i].classList.add('even');
        } else {
            elements[i].classList.add('odd');
        }
    }
});