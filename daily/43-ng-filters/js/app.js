/**
 * Filters
 * 
 * Filters allow you to convert data for display purposes.
 * This lets you store certain more specific information in
 * your service but 'humanize' it before it's displayed.
 * 
 * For example, you can convert a number into a price by 
 * adding a $ and rounding to two decimal places.
 * 
 * You can have a list of names and filter them down to
 * the ones that match a search string.
 * 
 * You can make sure all names are capitalized.
 * 
 * Etc, etc, etc.
 */

// todo list
// StockApp
// StockController
// StockService
// 2 filters

const app = angular.module('StockApp', []);

app.controller('StockController', function ($scope, StockService) {
    $scope.stocks = StockService.getStocks();
});

/* Round a number to the nearest integer and add a dollar sign */
app.filter('dollar', function () {
    // Filters get the original value as an input and return the
    // 'transformed' value. Return the function that is the 
    // filter.
    return function (amount) {
        return '$' + Math.round(amount);
    };
});

app.filter('capitalize', function () {
    return function (garbled) {
        return garbled.toUpperCase();
    };
});

// CHALLENGE: write a filter to capitalize the ticker names

app.factory('StockService', function () {
    let stocks = [
        // Let's assume these strings come from users (so who knows how 
        // they will capitalize). Prices are updated constantly and sometimes
        // the app needs really specific values.
        { ticker: 'AAPL', price: 981.123518 },
        { ticker: 'Msft', price: 318.570375 },
        { ticker: 'ABc', price: 59.6617493 },
        { ticker: 'goog', price: 730.788594 },
    ];

    return {
        getStocks() {
            return stocks;
        },
    };
});