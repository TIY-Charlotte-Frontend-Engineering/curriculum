(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Build a basic pokemon app that gets pokemon.
 * You can click a catch button and they are caught.
 * 
 * One module for making AJAX requests in general.
 * One module for making our Pokemon objects from the response.
 * One module ('pokedom') that does Pokemon-related DOM manipulation.
 */
let ajax = require('./ajax');               /* general-purpose ajax request module */
let pokemonify = require('./pokemonify');   /* convert pokemon api objects to our pokemon objects */
let pokedom = require('./pokedom');         /* show our pokemon objects in the dom */

window.addEventListener('load', function () {
    ajax.get('http://pokeapi.co/api/v2/pokemon/', showPokemon);
});

/* Pokemonify the response then render it to the DOM */
function showPokemon(response) {
    // pokemonify
    let pokemon = pokemonify(response.results); // ['bulbasaur', 'charmander', ...]
    // pokedom: example (doesnt work now)
    pokedom.show(pokemon);
}
},{"./ajax":2,"./pokedom":3,"./pokemonify":4}],2:[function(require,module,exports){

module.exports = {
    get: function (url, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('load', function () {
            let response = JSON.parse(request.responseText);
            callback(response);
        });
        request.send(); // dont forget
    },
    post: function () {
        // todo l8r
    },
};
},{}],3:[function(require,module,exports){

module.exports = {
    /* Subjects: array of strings */
    show: function (subjects) {
        // map, forEach, for loop
        // map: run over all items to create a new array
        //      (does return an array)
        // forEach: run over all items to create a side effect
        //      (does not return an array)
        let parent = document.querySelector('#pokemon');

        // Option #1: good ol' for loop
        // for (let i = 0; i < subjects.length; i++) {
        //     let li = document.createElement('li');
        //     li.textContent = subjects[i];

        //     parent.appendChild(li); // doesnt exist yet
        // }

        // Option #2: good new forEach function 
        subjects.forEach(function (pokemon) {
            let li = document.createElement('li');
            li.textContent = pokemon;

            parent.appendChild(li); // doesnt exist yet
        });
    },
};
},{}],4:[function(require,module,exports){
/**
 * Input: list of pokemon from server
 * Output: pokemon names as array
 */
function cleanup(pokes) {
    return pokes.map(nameOnly);
}

function nameOnly(pokemon) {
    // First letter should be uppercase, all others should be lowercase
    return pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
}

module.exports = cleanup;
},{}]},{},[1]);
