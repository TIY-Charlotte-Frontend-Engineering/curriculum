
/**
 * 1. Get some peeps.
 * 2. Display peeps.
 * 3. Set up a listener so we can filter peeps.
 */
function Peep(raw) {
    this.name = `${raw.name.first} ${raw.name.last}`;
    this.location = `${raw.location.city}, ${raw.location.state}`;
    this.image = raw.picture.medium;

    return this;
}

window.addEventListener('load', () => {
    console.log('hello');

    getPeeps(showPeeps);
});

/* Call 'success' once we get peeps */
function getPeeps(success) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/?results=500');
    request.addEventListener('load', () => {
        // const response = JSON.parse(request.responseText);
        // const results = response.results;
        const { results } = JSON.parse(request.responseText);
        // Convert the complex person object into a simpler one.
        const peeps = results.map(person => new Peep(person));
        success(peeps);
    });
    request.send();
}

const showPeeps = peeplist => {
    // Clear the list of peeps in the DOM
    const parent = document.querySelector('#peeps');
    parent.innerHTML = ''; // remove all child elements

    // Re-render all peeps in peeplist
    peeplist.forEach(peep => {
        // create li
        const li = document.createElement('li');
        // render mustache template
        li.innerHTML = Mustache.render(
            document.querySelector('#peep-template').innerHTML,
            peep // the current item from the array
        );
        // add li to parent
        parent.appendChild(li);
    });
};