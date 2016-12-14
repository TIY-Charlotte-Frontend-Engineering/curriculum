
/* Set things up */
function init() {
    let button = document.querySelector('#find-reader');
    button.addEventListener('click', getNewReader);
}

/* Make an Ajax request to get a new random person. */
function getNewReader() {
    // 1. Set up an XMLHttpRequest. We use these specifically and
    //    exclusively for Ajax requests.
    let request = new XMLHttpRequest(); // 'new' is a JS keyword
    // Where do we make the request to?
    request.open('GET', 'https://randomuser.me/api/?results=100');
    // What do we do once the results load?
    request.addEventListener('load', function () {
        console.log('weve got mail');
        // responseText is the place where the response is stored
        // this is our JSON!
        // we can convert it into something JS can use with JSON.parse()
        let response = JSON.parse(request.responseText); // convert from JSON to JS object
        for (let i = 0; i < response.results.length; i++) {
            let user = response.results[i]; // the only data we actually care about
            // note: do not copy & paste, this will be different
            showPerson(user);
        }
    });
    // GO GO GO GO GO GO
    request.send();
    console.log('mail sent');
}

/* Now that we have this data, let's show it in the DOM */
function showPerson(loyalSubject) {
    let name = document.createElement('li');
    name.textContent = loyalSubject.name.first + ' ' + loyalSubject.name.last;

    // Add to DOM
    let parent = document.querySelector('#folks');
    parent.appendChild(name);
}

window.addEventListener('load', init);