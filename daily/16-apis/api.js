// When the page loads, request list of donuts.
window.addEventListener('load', function () {
    getDonuts();

    // When someone clicks the 'create new' button, create a new donut
    let createBtn = document.querySelector('#new-donut');
    createBtn.addEventListener('click', function () {
        makeNewDonutType();
    });
});

function makeNewDonutType() {
    // 1. POST request to the server
    // 2. send 'name', 'description', 'count' (important names match w/ backend)
    let donutType = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        count: 0,
    };

    let request = new XMLHttpRequest();
    request.open('POST', 'http://192.168.1.29:4567/donut-types');
    request.addEventListener('load', function () {
        console.log('new donut exists!!!!!');
    });
    // need to serialize the data I send over
    request.send(JSON.stringify(donutType));
}

// Get list of donuts.
function getDonuts() {
    // Two things that need to match: verb (GET) and URL
    let request = new XMLHttpRequest();
    request.open('GET', 'http://192.168.1.29:4567/donut-types');
    request.addEventListener('load', function () {
        console.log('we actually heard back!');
        let response = JSON.parse(request.responseText);
        console.log(response);

        // Show each of the donuts
        for (let i = 0; i < response.length; i++) {
            showDo(response[i]);
        }
    });
    request.send(); // don't forget again, luke
}

/* Display donuts. */
function showDo(donut) {
    let newDonut = document.createElement('li');

    // Create my h2 (title)
    let donutTitle = document.createElement('h2');
    donutTitle.textContent = donut.name;
    newDonut.appendChild(donutTitle);

    // Create my p (description)
    let donutDescription = document.createElement('p');
    donutDescription.textContent = donut.description;
    newDonut.appendChild(donutDescription);

    // Create my p (count)
    let donutCount = document.createElement('p');
    donutCount.textContent = donut.count;
    newDonut.appendChild(donutCount);

    // get the parent (where we want to append).
    let parent = document.querySelector('#donuts');
    parent.appendChild(newDonut);
}

// Create a new donut type.

// Update donut count (tbd).