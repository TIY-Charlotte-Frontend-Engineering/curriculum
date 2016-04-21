var app = angular.module('FoodApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/list', {
        controller: 'FoodListController',
        templateUrl: 'templates/list.html',
    }).when('/cart', {
        controller: 'FoodCartController',
        templateUrl: 'templates/cart.html',
    });
}]);

app.filter('cap', function () {
    return function (name) {
        return name.toUpperCase();
    };
});

app.filter('dollarify', function (){
    return function (money) {
        return '$' + money;
    };
});

app.directive('foodDisplay', function () {
    return {
        templateUrl: 'templates/food-display.html',
    };
});

app.controller('FoodListController', ['$scope', 'FoodService', function($scope, FoodService) {
    $scope.foods = FoodService.allFoods();
    console.log('youve reached the foodlist');
    
    $scope.buyThing = function (food) {
        FoodService.addToCart(food);
    };
}]);

app.controller('FoodCartController', ['$scope', function($scope) {
    console.log('food kart');
}]);

app.factory('FoodService', function() {
    var foods = [
        { name: 'Grapfruit', inventory: 12 },
        { name: 'Turkey', inventory: 10 },
        { name: 'Whipped cream', inventory: 4 },
    ];
    
    var cart = [];
    
    return {
        allFoods: function() {
            return foods;
        },
        addToCart: function (food) {
            if (food.inventory > 0) {
                cart.push(food.name);
                food.inventory = food.inventory - 1;
            }
        },
        emptyCart: function() {
            cart = [];
        },
    };
});

// X need a router
// X require said router
// 3. two controllers
// 4. two templates (for now...)
// 5. come back: filters and directives