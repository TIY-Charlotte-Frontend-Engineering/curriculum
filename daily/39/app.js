let app = angular.module('BookApp', []);

// Name of component must match name of HTML tag
app.component('book', {
    templateUrl: 'components/book.html',
    // When using a <book>, users can specify readable="???"
    bindings: {
        readable: '<',
    },
});

app.controller('CheckoutController', function ($scope, BookService) {
    $scope.books = BookService.getBooks();
    $scope.username = '';

    // Check a book out to $scope.username
    $scope.borrow = function (target) {
        target.borrowedBy = $scope.username;    // toughy
    };
});

app.controller('SearchController', function ($scope, BookService) {
    $scope.borrower = '';    // value from input box
    $scope.books = BookService.findBooks($scope.borrower);

    $scope.search = function () {
        $scope.books = BookService.findBooks($scope.borrower);
    };
});

app.factory('BookService', function () {
    let books = [
        { title: 'Hound doggin', author: 'Elvis', borrowedBy: null },
        { title: 'Monty C', author: 'Count Dumas', borrowedBy: null },
        { title: 'Biggles Combs His Hair', author: 'Biggles Himself', borrowedBy: null },
    ];

    // WHAT WE RETURN IS THE ACTUAL SERVICE
    return {
        // Get all the books
        getBooks: function () {
            return books;
        },

        // Find books that have a specific borrower
        findBooks: function (who) { // 'who' is the name of the person we're interested in
            let keepers = [];

            for (let i = 0; i < books.length; i++) {
                if (books[i].borrowedBy === who) {
                    keepers.push(books[i]); // push the current book
                }
            }

            return keepers;
        }
    };
});