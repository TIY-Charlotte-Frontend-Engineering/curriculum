
/**
 * document.querySelector = get an existing element
 * document.createElement = create a new one
 */
function startYourEngines() {
    // Get an existing element
    let body = document.querySelector('body');

    // Add my <h1>
    let header = document.createElement('h1');
    header.textContent = 'Places I want to go';
    body.appendChild(header); // doozy detected

    // Add my <h2>
    let secondary = document.createElement('h2');
    secondary.textContent = 'By me';
    secondary.classList.add('author'); // add a class
    secondary.setAttribute('id', 'grapefruit'); // attribute name, value
    body.appendChild(secondary);

    // Add my <ul>
    let places = ['New Mexico', 'Maine', 'Guatemala', 'Cuba', 'Space'];
    let list = document.createElement('ul');

    for (let i = 0; i < places.length; i++) {
        let item = document.createElement('li');
        item.textContent = places[i]; // put places[i] as the text in this element
        list.appendChild(item);
    }

    body.appendChild(list); // add the <ul> to the body
}

window.addEventListener('load', startYourEngines);