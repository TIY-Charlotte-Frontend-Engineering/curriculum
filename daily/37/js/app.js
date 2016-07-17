var mainApp = angular.module('HelloWorldApp', []);
var requestUrl = 'http://gateway.marvel.com:80/v1/public/characters?apikey=ea904943b774d2e0bf732697141a07da&limit=20';

mainApp.controller('MainAppController', function ($scope, $http) {
    var x = 0;
    $scope.heroes = [];
    $scope.pancake = '';
    $scope.getDetails = function(input) {
        console.log(input);
        $scope.current.name = '3-D Man';
        $scope.current.power = 'high dimensionality';
        $scope.current.id = 17;
        
        let eventUrl = '';
    };
    $scope.current = {
        id: 7,
        name: 'no one yet',
        power: 'literally nothing',
    };
    
    $http({
        method: 'get',
        url: requestUrl,
    }).then(function (response) {
        console.log(response.data.data.results);
        $scope.heroes = response.data.data.results;
    });
});

//var secondary = require('./secondary');
//secondary(mainApp);