// So far we have had no dependencies.
// i-n-d-e-p-e-n-d-e-n-t 
// Now we need to depend on UI router. 'ui.router' is a string
// they made up, and we need to use it. Putting this here means
// 'load ui router before trying to run my app'.
const app = angular.module('PotentialFriendApp', ['ui.router']);
/**
 * New section: 'config'.
 * 
 * This gets run once at the very beginning and is used for 
 * setting up our app before the party starts. It's also
 * where we set up all routes ('states' in ui router-ese).
 */
app.config(function ($stateProvider) {
    // $stateProvider is the object we add routes ('states') to.
    $stateProvider.state({
        name: 'list-em-all',
        url: '/list',
        component: 'friendList',
    });

    $stateProvider.state({
        name: 'show-details',
        url: '/details/:person_id',
        component: 'friendDetails',
    });

    $stateProvider.state({
        name: 'home',
        url: '',
        component: 'friendList',
    });

    // ...we can set up any number of states
});

// Each one of these represents a 'view' on the page.
app.controller('ListController', function ($scope, NuggetService) {
    $scope.friends = NuggetService.getFriends();

    $scope.greet = function (who) {
        console.log(`Good day, ${who.name}`);
    };
});

// $routeParams - parameters provided by the router
// ^ provided by ui-router, have to use this name
// $stateParams is used whenever we need to get information from the route 
app.controller('DetailsController', function ($scope, $stateParams, NuggetService) {
    // Why person_id? 
    // Note: need to parseInt - these will be strings by default
    const id = parseInt($stateParams.person_id);
    $scope.person = NuggetService.getPerson(id);
});

/* Defining a component */
app.component('friendList', {
    controller: 'ListController',
    templateUrl: 'templates/list.html',
});

app.component('friendDetails', {
    controller: 'DetailsController',
    templateUrl: 'templates/details.html',
});

app.component('friendSummary', {
    templateUrl: 'templates/summary.html',
    bindings: {
        person: '<',
        whenIClick: '&', // functions are &
    },
});

app.factory('NuggetService', function () {
    const friends = [
        { id: 0, name: 'Francisco', picture: '' },
        { id: 1, name: 'Gloria', picture: '' },
        { id: 2, name: 'Jeb', picture: '' },
    ];

    return {
        getFriends() {
            return friends;
        },
        getPerson(id) { // id is a number like 0, 1, 2
            for (let i = 0; i < friends.length; i++) {
                if (friends[i].id === id) {
                    return friends[i];
                }
            }
        },
    };
});