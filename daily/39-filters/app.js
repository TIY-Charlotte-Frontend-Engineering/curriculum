/**
 * Filters are functions that we can run right before we display
 * something in our templates. We typically use them for things like
 * formatting how things are displayed, filtering an array, or doing
 * some quick calculations.
 * 
 * Filters should be *pure functions* and not do anything slow like 
 * Ajax requests.
 */

const app = angular.module('SmoothieApp', []);

app.controller('IngredientController', function ($scope, SmoothieService, IngredientService) {
    $scope.ingredients = IngredientService.allIngredients();

    $scope.add = function (item) {
        SmoothieService.addIngredient(item);
    };

    $scope.smoothie = SmoothieService.getSmoothie();
});

/* Component names are camelcase. */
app.component('ingredientItem', {
    templateUrl: 'templates/ingredient-item.html',
    bindings: {
        item: '<',          // one-way binding 
        requestAdd: '&',    // function binding
    },
});

/* Return the function that should run when this filter is used. */
app.filter('asMoney', function () {
    // You'll almost always have an input (the thing you're filtering).
    // You'll almost always have an output (the result of your filtering).
    return function (num) {
        num = num.toFixed(2);
        return '$' + num;
    };
});

app.filter('priceLimit', function () {
    // Items is the list of things I'm filtering down
    // Max is the maximum allowed price. More expensive things get dropped.
    return function (items, max) {
        const keeper = [];
        max = parseFloat(max); // might be a decimal point number
        
        for (let i = 0; i < items.length; i++) {
            if (items[i].price < max) {
                keeper.push(items[i])
            }
        }

        // const keeper = items.filter(item => item.price < max);

        return keeper;
    }
});

app.factory('IngredientService', function () {
    const ingredients = [
        { name: 'Strawberries', price: 1.89 },
        { name: 'Cilantro', price: 1.18 },
        { name: 'Bananas', price: 2.16 },
    ];

    return {
        allIngredients() {
            return ingredients;
        },
    };
});

app.factory('SmoothieService', function () {
    /* Ingredients that have been added */
    const smoothie = [];

    return {
        addIngredient(item) {
            console.log(`added a ${item.name}`)
            smoothie.push(item);
        },
        getSmoothie() {
            return smoothie;
        },
    };
});