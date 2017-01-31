
const app = angular.module('PotentialFriendApp', []);

// Each one of these represents a 'view' on the page.
app.controller('ListController', function () {

});

app.controller('DetailsController', function () {

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