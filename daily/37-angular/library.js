/**
 * CHALLENGE
 * 
 * Create an Angular app that lists an array of books. You should have a button for each
 * book that changes the 'checked_out' status from true to false.
 * 
 * If the book is checked out, the button should say 'Return'.
 * If the book isn't checked out, the button should say 'Check out'.
 * 
 * Books should have a 'title' (string), 'author' (string), and 'checked_out' (boolean) property.
 */
let app = angular.module('BookApp', []);

app.controller('BookListController', function ($scope) {
    $scope.books = [
        { title: 'Treasure Island', author: 'Author A', checked_out: false },
        { title: 'Pipi Longstocking', author: 'Author B', checked_out: false },
        { title: 'Ubiquity', author: 'Author C', checked_out: false },
    ];

    $scope.checkOut = function (book) {
        book.checked_out = true;
    };

    $scope.bringBack = function (book) {
        book.checked_out = false;
    };
});