(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

const app = angular.module('SnaxApp', []);

const controllers = [
    require('./controllers/snacklist'),
    require('./controllers/receiptlist'),
    require('./controllers/snackbutton'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

/**
 * Define a component.
 * 
 * - First parameter is a name. Names should match what you want
 * the element to be called in HTML, with the exception of converting
 * KEBABCASE (this-is-kebab-case) into CAMELCASE (thisIsCamelCase).
 * 
 * - Second parameter is an object that defines what the component is.
 */

/**
 * A basic component will have two key parts:
 *   - Template: what HTML should show up in the DOM 
 *   - Controller: what controller is used to render the template
 */
app.component('snackButton', {
    // Note: we're asking Angular to go get another file for us, 
    // and that's risky business if we're reading it straight from
    // their computer. We need to use a webserver (npm install -g serve).
    //
    // Then access your files from the webserver instead of directly
    // from your computer. Your computer is referred to as 'localhost',
    // so we want to access http://localhost:3000.
    templateUrl: 'templates/snack-button.html',
    /* Declare my inputs to this component */
    bindings: {
        // name of binding: type of binding
        // '<' means one-way binding (components cannot CHANGE the value, read only)
        // '=' means two-way binding (components CAN change the value, read / write)
        // '&' means what we're passing is a function
        xyz: '<', 
        tappedOn: '&', // made this name up
    },
    controller: 'SnackButtonController',
});
},{"./controllers/receiptlist":2,"./controllers/snackbutton":3,"./controllers/snacklist":4}],2:[function(require,module,exports){
module.exports = {
    name: 'ReceiptListController',
    func: function ($scope) {

    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'SnackButtonController',
    func: function ($scope) {

    },
};
},{}],4:[function(require,module,exports){

module.exports = {
    name: 'SnackListController',
    func: function ($scope) {
        $scope.snacks = [
            { name: 'Capn Crunch Berries', count: 8, price: 4.59 },
            { name: 'Golden Grahams', count: 0, price: 3.19 },
            { name: 'Golden Oreos', count: 13, price: 2.18 },
        ];

        $scope.buy = function (what) {
            console.log(`Buying ${what.name}`);
            if (what.count > 0) {
                what.count--;
            }
        };
    },
};
},{}]},{},[1]);
