/**
 * Routing
 * 
 * Routes allow us to simulate a multi-page app on a single page. All the same benefits
 * of routes in Ampersand (same exact idea).
 * 
 * We've got a main page that could include headers, footers, etc and then part of the
 * page that changes based on what 'route' we're on.
 */

// Things we'll need
// 1. get request to get user data
// 2. service for the get request
// 3. each person in the list represented with component (gh-friend)

// Historically we've had an empty array as the second param. This
// array is the dependency list: the list of modules to load before
// trying to run the app. Now we need to load the router before
// we try to do any routing.
const app = angular.module('GithubFriendsApp', ['ui.router']);

// Step 1: set up routes @ beginning of app
// Step 2: create links between routes

app.config(function ($stateProvider) {
    // Code that runs when we're launching our app before controllers,
    // services, etc. $stateProvider is the name of the service
    // provided by the angular router package.

    $stateProvider.state({
        name: 'list',   // we'll come back to this
        url: '/list',
        component: 'ghList',
    });

    $stateProvider.state({
        name: 'details',
        url: '/details',
        component: 'ghDetails',
    });
})

app.component('ghList', {
    templateUrl: 'templates/list.html',
    controller: 'FriendsListController',
});

app.component('ghDetails', {
    templateUrl: 'templates/details.html',
    controller: 'FriendsDetailController',
});

app.controller('FriendsListController', function ($scope, FriendService) {
    $scope.friend_name = '';
    $scope.add = function () {
        console.log('adding new friend');
        FriendService.addFriend($scope.friend_name);
        $scope.friend_name = '';
    };

    $scope.friends = FriendService.getFriends();
    // challenge: get the list of friends to render in the DOM
});

app.controller('FriendsDetailController', function ($scope, FriendService) {
    $scope.friend = {
        username: 'Jesse',
    };
});

app.factory('FriendService', function ($http) {
    const friends = [];

    // always return an object
    return {
        addFriend(name) {
            // Create an object we can update later (once ajax requests are done).
            const friend = {
                username: name,
                pic: null,
            };

            friends.push(friend);

            $http.get('https://api.github.com/users/' + name).then(function (response) {
                // Update our friend object.
                friend.pic = response.data.avatar_url;
            });
        },

        getFriends() {
            return friends;
        },
    };
});