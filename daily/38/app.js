let app = angular.module('PokeApp', []);

app.component('pokedex', {
    controller: 'PokedexController',
    templateUrl: 'views/pokedex.html', // an html file
});

app.controller('PokedexController', function ($scope, BreederService) {
    $scope.pokemon = BreederService.catchEm();
});

app.factory('BreederService', function ($http) {
    // To make a request, we need to provide:
    let pokemans = [];

    // Using PROMISES, which are another approach to callbacks that provide a 
    // more logical flow. Most people find them much easier to read.
    $http({
        method: 'GET',
        url: 'http://localhost:7000/pokemon',
    }).then(function (response) {
        // Copy response.data into pokemans.
        angular.copy(response.data, pokemans);
    });

    // Return THE SERVICE ITSELF
    return {
        catchEm: function () {
            return pokemans;
        }
    };
});