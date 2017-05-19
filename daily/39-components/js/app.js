/**
 * Components are one of the really popular ideas in frontend development these days.
 *      => React (alternative to Angular) popularized them but most frameworks support
 *         them.
 * 
 * A component is a piece of an application that usually encompasses structure (HTML),
 * styling (CSS), and behavior (JS). For example, the 'play' button on the YouTube
 * video player would be a component. The Facebook like and share buttons would be 
 * components. A tweet in a Twitter feed would be a component. Components are often
 * made of other components, which are made of other components, etc.
 * 
 * More concretely, you can think of components as custom HTML tags.
 *      - The <input> element is sort of a built-in component. It automatically responds
 *        to things like clicks, typing, and tabbing, and has a certain look and feel
 *        built-in (unless you override it).
 */

const app = angular.module('PokemonApp', []);

app.controller('PokeListController', function ($scope, PokeService) {
    $scope.pokemon = PokeService.getPokemon();
});

app.factory('PokeService', function () {
    let pokemon = [
        { name: 'Pidgey', element: 'Wind' },
        { name: 'Snorlax', element: 'Earth' },
        { name: 'Pikachu', element: 'Electricity' },
    ];

    // Return the actual service.
    return {
        getPokemon: function () {
            return pokemon;
        },
    };
});

/**
 * The name of a component is the HTML element
 * you'll use to load it.
 * 
 * WEIRD RULE
 * Dashes are not valid in component names. Use
 * camelCase. When you write the actual HTML element,
 * replace camelCase with dashes-instead-of-capitals.
 * 
 * <random-poke></random-poke>
 */
app.component('randomPoke', {
    templateUrl: 'templates/random.html',
    controller: 'RandomPokeController',
});

app.controller('RandomPokeController', function ($scope, PokeService) {
    let options = PokeService.getPokemon();
    // Random index in the array.
    let index = Math.floor(Math.random() * options.length);

    $scope.selected = options[index]; // use in our template
});

app.component('pokemon', {
    templateUrl: 'templates/pokemon.html',
    controller: 'PokemonController',
    // third property: 'bindings'
    bindings: {
        /**
         * This syntax is extremely dumb.
         * 
         *  '<' means one-way binding
         *  '=' means two-way binding
         *  '&' means you're passing a function
         */
        which: '<', // i'll explain soon
    },
});

app.controller('PokemonController', function ($scope) {

});