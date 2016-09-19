let app = angular.module('SchoolApp', []);

app.controller('SupplyController', function ($scope) {
    $scope.name = '';
    $scope.price = 0;
    $scope.quantity = 0;
    $scope.cart = [];

    $scope.addToCart = function () {
        // Add a new line item to the cart.
        $scope.cart.push({
            name: $scope.name,
            price: $scope.price,
            quantity: $scope.quantity,
        });
    };
});