// Create a new 'module'. Need to do this for our application.
let app = angular.module('TipCalcApp', []);

// Create a controller.
// First param: name of controller
// Second param:
//    1) Function to run for this controller
//    2) Second option coming later
app.controller('MainController', function ($scope) {
    // '$scope' are the values that can show up in the DOM
    $scope.username = 'Freddy G';
    $scope.money = 0;
    $scope.tip = 0;
    $scope.total = 0;

    $scope.updateTip = function () {
        $scope.tip = $scope.money * 0.2;
        $scope.total = $scope.money + $scope.tip;
    };
});