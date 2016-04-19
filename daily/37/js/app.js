var mainApp = angular.module('HelloWorldApp', []);
var requestUrl = 'http://gateway.marvel.com:80/v1/public/characters?apikey=ea904943b774d2e0bf732697141a07da&limit=20';

mainApp.controller('MainAppController', function ($scope, $http) {
    $scope.person = {
        name: 'Luke',
        age: 47,
    };
    
//    $scope.foods = [{
//        name: 'Cabbage',
//        status: 'healthy',
//    }, {
//        name: 'Coconut',
//        status: 'tropical',
//    }, {
//        name: 'Banana',
//        status: 'delicious',
//    }];
    
    $scope.heroes = [];
    $scope.pancake = '';
    
    $http({
        method: 'get',
        url: requestUrl,
    }).then(function (response) {
        console.log(response.data.data.results);
        $scope.heroes = response.data.data.results;
    });
});

var secondary = require('./secondary');
secondary(mainApp);