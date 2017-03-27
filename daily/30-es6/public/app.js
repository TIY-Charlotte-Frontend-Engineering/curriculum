(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1]);
