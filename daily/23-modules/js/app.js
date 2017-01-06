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