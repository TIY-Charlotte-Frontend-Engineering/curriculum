/**
 * AngularJS (Angular 1)
 * 
 * Angular was one of the first frontend frameworks and is fairly old now (7 years?).
 * It is extremely widely used in Charlotte and beyond, which is why we teach it here.
 * I also think it encourages a lot of really good practices.
 * 
 * Today we're starting with templates (views) and controllers (controllers). Models
 * come tomorrow.
 */

// Create a 'module' (in this case our application). 
let app = angular.module('ExpenseTracker', []);

/**
 * Create a controller with the name 'SummaryController'.
 * 
 * Angular does a LOT of stuff based on NAMES. The name of my controller is
 * significant here, as is the *name of my $scope parameter*.
 */
app.controller('SummaryController', function ($scope) {
    $scope.total = 0;
    $scope.name = 'Frederick';

    $scope.expense_name = '';
    $scope.expense_amount = 0;
    $scope.expenses = [];

    $scope.add = function () {
        console.log('clicked');
        $scope.expenses.push({
            name: $scope.expense_name,
            amount: $scope.expense_amount,
        });

        $scope.total = $scope.total + $scope.expense_amount;

        $scope.expense_name = '';
        $scope.expense_amount = 0;
    };
});