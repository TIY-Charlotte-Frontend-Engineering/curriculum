/**
 * This application reads from a bunch of similar API's, render their contents to the DOM, and gives users a simple form to add new 
 * items to each of the API's. The general approach is this:
 * 
 * 1. Create an array of objects, each one representing one of the API's we want to use.
 * 2. When the page loads, create an <li> in the <nav> and a <section> in the <main> for each api.
 * 3. Also create a form, one text box for each property of the object. Create a submit button w/ an event listener. 
 * 4. Start an interval that makes a GET request to each API every three seconds. Use the response to update the <li> and the <section>.
 * 
 * DO NOT COPY ANYTHING YOU COULDN'T WRITE YOURSELF. Do study it!
 */

/**
 * Step 1: create an array of API objects.
 * 
 * Totally made the structure of these up, but each one represents the API's we want to be able to communicate with. We're going to be able 
 * to iterate over this array in a couple of different places in order to:
 * 
 *   - make GET requests to each endpoint
 *   - make POST requests to each endpoint
 *   - create each <section> and <li>
 * 
 * We could also add extra fields but this seemed to be enough for me.
 */
let apis = [
    { name: 'coffeeshops', url: 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops', fields: ['name', 'rating', 'price'] },
    { name: 'cars', url: 'https://stormy-retreat-24546.herokuapp.com/cars', fields: ['model', 'year', 'color'] },
    { name: 'matches', url: 'https://fast-beach-63161.herokuapp.com/api', fields: ['name', 'age', 'gender', 'race', 'location', 'rating'] },
    { name: 'ancestors', url: 'https://rocky-depths-88529.herokuapp.com/ancestry', fields: ['name', 'yearBorn', 'origin'] },
    { name: 'movies', url: 'https://secret-springs-58890.herokuapp.com/api', fields: ['name', 'genre', 'rating'] },
];

/**
 * Makes a GET request to the specified api and the updated the DOM element with the ID of api.name. It's expecting 
 * one of the objects from the array to be passed in as its parameter (meaning it'll have the name, url, and 
 * fields available).
 */
function getLatest(api) {
    let request = new XMLHttpRequest();
    request.open('GET', api.url);
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        // First update the nav element. We find this thing using the ID.
        document.querySelector('#nav-' + api.name).textContent = api.name + ' (' + response.length + ')';

        // Then update the main parts of the DOM.
        let list = document.querySelector('#' + api.name + ' ul');
        // Delete everything from the ul and replace it. Not particular efficient but easier than alternatives.
        list.innerHTML = '';

        for (let i = 0; i < response.length; i++) {
            if (response[i] !== null) {
                let item = document.createElement('li');
                item.textContent = response[i][api.fields[0]];

                list.appendChild(item);
            }
        }
    });
    request.send();
}

/**
 * Send a post request to the provided API. This also expects one of the API objects as well as the item that 
 * should be stringified and sent to the server.
 */
function sendAlong(api, item) {
    let request = new XMLHttpRequest();
    request.open('POST', api.url);
    request.send(JSON.stringify(item));
}

/**
 * Step 3: create the form + other DOM elements
 * 
 * Run at the very beginning to create one of the API sections. This creates both the input fields and the <ul>
 * to show items in. We also need to set up a click listener on the button, which will pull all of the data from 
 * the input boxes we created and add them to an object to send over.
 * 
 * FWIW this is probably the hardest part of the assignment, at least to do in a generalized way.
 */
function createInitialLayout(api) {
    let section = document.createElement('section');
    section.setAttribute('id', api.name);
    section.classList.add('hidden');
    section.classList.add('details');

    let heading = document.createElement('h2');
    heading.textContent = api.name;
    section.appendChild(heading);

    let inputs = [];
    // Add several new input boxes.
    for (let i = 0; i < api.fields.length; i++) {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', api.fields[i]);

        section.appendChild(input);
        inputs.push(input);
    }

    let submit = document.createElement('button');
    submit.textContent = 'Add new';
    // Submit the data from the current fields. This part's kinda a doozy.
    submit.addEventListener('click', function () {
        // Create an empty object. We'll add properties to it in the loop but the properties we need to add will
        // depend on the values of api.fields.
        let submission = {};
        for (let i = 0; i < api.fields.length; i++) {
            submission[api.fields[i]] = inputs[i].value;
        } // end for loop

        // Send the POST request.
        sendAlong(api, submission);
    });
    section.appendChild(submit);

    let list = document.createElement('ul');

    section.appendChild(list);
    document.querySelector('main').appendChild(section);
} // end function declaration

/**
 * Step 2: setup
 * 
 * Kick things off with a bang. Here we're setting up DOM elements for each of our API's as well as the nav 
 * elements. Last but not least we make initial GET requests to each API and then start an interval where we make 
 * more API requests each three seconds.
 */
window.addEventListener('load', function () {
    // Create the nav once at the beginning
    for (let i = 0; i < apis.length; i++) {
        let item = document.createElement('li');
        item.textContent = apis[i].name;
        item.setAttribute('id', 'nav-' + apis[i].name);
        item.classList.add('nav-link');

        item.addEventListener('click', function () {
            let all = document.querySelectorAll('.details');
            for (let i = 0; i < all.length; i++) {
                all[i].classList.add('hidden');
            }

            document.querySelector('#' + apis[i].name).classList.remove('hidden');
        });

        document.querySelector('#apis-list').appendChild(item);
    }

    // Create the DOM elements once at the beginning.
    for (let i = 0; i < apis.length; i++) {
        createInitialLayout(apis[i]);
    }

    // Update the data once at the beginning.
    for (let i = 0; i < apis.length; i++) {
        // Make a GET request to this particular API.
        getLatest(apis[i]);
    }

    // Step 4: start an update interval
    setInterval(function () {
        console.log('getting updates');
        for (let i = 0; i < apis.length; i++) {
            getLatest(apis[i]);
        }
    }, 3000);
});