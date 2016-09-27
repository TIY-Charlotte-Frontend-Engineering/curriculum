// In order to run AnimalApp, you're going to need ui.router
// 'Mystery array' IRL = 'dependency list'
let app = angular.module('AnimalApp', ['ui.router']);

/**
 * The way routing works in Angular is by configuring a bunch of 'states'.
 * Each route (URL) triggers a different 'state'.
 */

// config() is a function run once at the beginning of your app to set things up
app.config(function ($stateProvider) {
    // $stateProvider is the router

    // Set up a new state.
    $stateProvider.state({
        name: 'list',
        url: '/all',
        component: 'animals',
    });

    $stateProvider.state({
        name: 'details',            // sref refers to this
        // Docs: https://github.com/angular-ui/ui-router/wiki/URL-Routing
        // Create a 'variable' (parameter) in the URL that we can use for 
        // populating the right content
        url: '/animal/:animalNum',   // what the flog
        // Replace template with a component so that its better organized.
        // template: '<h2>detail view</h2>'
        component: 'zoomin',
    });
});

app.component('zoomin', {
    templateUrl: 'components/animal-details.html',
    controller: 'AnimalDetailController',
});

/**
 * Routers provide two services: $stateProvider and $stateParams.
 *  - $stateProvider is how we set up routes.
 *  - $stateParams is how we access route params.
 */
app.controller('AnimalDetailController', function ($scope, $stateParams) {
    $scope.id = $stateParams.animalNum;

    // doesn't exist yet!!
    // $scope.animal = AnimalService.getAnimalId($stateParams.animalNum);
});

// 1. Make a service called AnimalService. Needs getAnimalId function.
// 2. Need to create links to each animal so that I can click them and see details.

// Component naming rules:
//   luke add link
app.component('animals', {
    templateUrl: 'components/animal-list.html',
    controller: 'AnimalListController',
});

app.controller('AnimalListController', function ($scope) {
    console.log('loading controller');
    // This should be in a service!
    $scope.animals = [
        { id: 0, name: 'Hedgehog', eyes: 2, place: 'Greenbow, AL', facts: 'Large, pointy, and carnivorous.' },
        { id: 1, name: 'Liger', eyes: 6, place: 'Charlotte, NC', facts: 'Small n dainty.' },
    ];
});

// TODO: create a detailcomponent

app.component('beast', {
    // templateUrl: url to the template
    // binding: names of inputs and outputs (parameters)
    // controller: what controller the component should use
    templateUrl: 'components/beast.html',
    bindings: {
        // less than is weird
        // i have no good explanation
        // it is a thing
        // soooo do it 
        species: '<'
    },
    controller: 'BeastController',
});

app.controller('BeastController', function ($scope) {
    $scope.pet = function (beast) {
        console.log('petting');
        console.log(beast);
    }
});