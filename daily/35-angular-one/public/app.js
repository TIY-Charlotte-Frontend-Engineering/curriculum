(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// Create a new 'module'. Angular came up with this module thing before
// require() was a thing. This is their attempt at making it possible to
// use multiple files. In practice I don't use modules for much other
// than defining the app.
//
// Empty array (second argument) is a dependency list, which are the other
// modules Angular should load before running PetApp.
const app = angular.module('PetApp', []);

// When I define a controller, the first arg is the name, the second is the 
// function that describes what it does.
//
// You can add a bunch of different params to the function, which are 'services'.
// WEIRD THING ALERT: the NAME of those params is important.
app.controller('PetShoppeController', function ($scope, PetService) {
    $scope.host = 'Maple';
    $scope.hair = 'long and golden';

    $scope.colorTyme = function (color) {
        console.log('lets dye this dog');
        // Its nice once you get used to it
        // $scope.hair = `spikey ${color} dreadlocky`;
        $scope.hair = 'spikey ' + color + ' dreadlocky';

        console.log(PetService.getPets());
    };
});

/**
 * Scopes are INDEPENDENT across controllers. The scope in
 * one controller is not the same as the scope in another
 * controller.
 */
// Without services
// app.controller('ListOPetsController', function ($scope) {
//     $scope.petName = '';
//     $scope.pets = [];

//     // You won't have access to 'nums' in your template
//     // because its a local variable. You need to add it
//     // to scope, so when we do $scope.x that means our
//     // templates can access this array called 'x'.
//     let nums = [1, 2, 67];
//     $scope.x = nums;

//     $scope.addPet = function () {
//         $scope.pets.push($scope.petName);
//         $scope.petName = '';
//     };

//     $scope.remove = function (id) {
//         $scope.pets.splice(id, 1);
//     };
// });

// Second param is name of service that was created below.
app.controller('ListOPetsController', function ($scope, PetService) {
    $scope.petName = '';
    $scope.pets = PetService.getPets();
    // $scope.pets = [];

    $scope.newPet = function () {
        PetService.addPet($scope.petName);
        // $scope.pets.push($scope.petName);
        $scope.petName = '';
    };

    $scope.remove = function (id) {
        $scope.pets.splice(id, 1);
    };
});

/**
 * .factory is how we create services. Sorry but it
 * is, nothing we can do about it.
 * 
 * This function runs once at the beginning and returns
 * the OBJECT THAT IS THE SERVICE.
 */
app.factory('PetService', function () {
    let pets = [];

    return {
        // Made up function names
        addPet: function (name) {
            pets.push(name);
        },
        getPets: function () {
            return pets;
        },
    };
});
},{}]},{},[1]);
