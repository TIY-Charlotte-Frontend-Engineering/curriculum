/**
 * Services are the models of Angular. All data that isn't specific to
 * a single controller should be stored in the service.
 * 
 * Just because its CURRENTLY only used in one controller doesn't mean
 * its EVER only going to be used in one controller.
 */

const app = angular.module('BestBookApp', []);

/* Constructor for creating Books */
function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;

    this.cover = null;
    this.id = null;
    this.added = null;

    this.isFavorite = false;

    return this;
}

app.controller('NewBookController', function ($scope, BookService) {
    // These are basically the default values for our $scope variables. Also
    // a convenient list of all the properties we have in our templates.
    $scope.title = 'lord of the flies';
    $scope.author = '';
    $scope.price = 0;

    $scope.newBook = function () {
        // Need to use $scope because that's the name of the strings I want to use as input.
        const brandNewBook = new Book($scope.title, $scope.author, $scope.price);
        // Add is a name I made up -- could have called it anything.
        BookService.add(brandNewBook);

        $scope.title = '';
        $scope.author = '';
        $scope.price = 0;
    };
});

app.controller('ShowBooksController', function ($scope, BookService) {
    // Get the array at the beginning so we can render it right away.
    $scope.books = BookService.getAll();

    $scope.favoriteBook = function (target) {
        console.log(`Marking ${target.title} as a fav`);
        BookService.markAsFavorite(target);
    };
});

// TODO: make a service to store books
// Factories always return services.
app.factory('BookService', function () {
    // Great example of a closure - books is preserved throughout
    // the lifetime of our app.
    const books = [];

    books.push(new Book('test book', 'famous author', 17.89));
    books.push(new Book('test book 2', 'another person', 17.89));
    books.push(new Book('little-known masterpiece', 'a nobody', 17.89));

    return {
        // ES6 syntax for function property
        add(book) {
            books.push(book);
        },
        getAll() {
            return books;
        },
        markAsFavorite(goodie) {
            goodie.isFavorite = true;
        },
    };
});