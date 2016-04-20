var app = angular.module('FoodApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            controller: 'FoodListController',
            templateUrl: 'sections/foodlist.html',
        })
        .when('/cart', {
            controller: 'ShoppingCartController',
            templateUrl: 'sections/shoppingcart.html',
        });
}]);

app.controller('FoodListController', ['$scope', 'ShoppingCart', function ($scope, ShoppingCart) {
    console.log('done');
    $scope.foods = [
        { name: 'Coconut', price: 4.01 },
        { name: 'Grapfruit', price: 6.15 },
        { name: 'Celery', price: 1.24 },
    ];
    
    $scope.addToCart = function (item) {
        console.log('added ' + item.name);
        ShoppingCart.add(item);
    };
}]);

app.controller('ShoppingCartController', ['$scope', 'ShoppingCart', function ($scope, ShoppingCart) {
    $scope.cart = ShoppingCart.gimme();
}]);

app.factory('ShoppingCart', function() {
   var cart = [];
    
    return {
      add: function (thing) {
          cart.push(thing);
      },
      gimme: function() {
          return cart;
      } 
    };
});