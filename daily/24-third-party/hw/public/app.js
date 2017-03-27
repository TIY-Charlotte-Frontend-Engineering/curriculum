(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Steps:
 * 
 * 1. Toggle between two views using 'hidden' class.
 * 2. Search through array of foods.
 * 3. Add items to an array of foods.
 * 4. Render an array of foods to the DOM.
 */

let foodList = require('./foods');

window.addEventListener('load', function () {
    // My two navigational elements
    let nav_list = document.querySelector('#show-list');
    let nav_add = document.querySelector('#show-add');

    let view_list = document.querySelector('#list-view');
    let view_add = document.querySelector('#add-view');

    let search_box = document.querySelector('#search');

    // 'When I click the nav_list element, show the list view'
    nav_list.addEventListener('click', function () {
        view_list.classList.remove('hidden');
        view_add.classList.add('hidden');
    });

    nav_add.addEventListener('click', function () {
        view_list.classList.add('hidden');
        view_add.classList.remove('hidden');
    });

    search_box.addEventListener('keyup', function () {
        // Perfect use case for filter
        // Find all the items that include search text in their nam
        let keepers = [];

        for (let i = 0; i < foodList.length; i++) {
            let food_name = foodList[i].name.toLowerCase();
            let search_term = search_box.value.toLowerCase();
            // 'Does this foods name include the search text?'
            if (food_name.includes(search_term)) {
                keepers.push(foodList[i]);
            }
        }

        showFoods(keepers); // different array!
    });

    showFoods(foodList);
});

/**
 * Input: array 
 * Show a list of foods in the DOM.
 */
function showFoods(foods) {
    let parent = document.querySelector('#menu'); // get our <ul>
    // important: clear the <ul> before rendering
    parent.innerHTML = '';

    for (let i = 0; i < foods.length; i++) {
        // Create an <li>
        let item = document.createElement('li');

        // Fill it with goodness
        item.innerHTML = Mustache.render(
            document.querySelector('#menu-item').innerHTML,
            foods[i]
        ); // not done

        // Append it to the <ul>
        parent.appendChild(item);
    }
}


},{"./foods":2}],2:[function(require,module,exports){
module.exports = [
    { name: 'Chicken salad', price: 8.67, description: 'Salad with chicken in it' },
    { name: 'Chicken soup', price: 12.34, description: 'Soup with chicken in it' },
    { name: 'Chicken teriyaki', price: 6.99, description: 'Chicken with sauce on it' },
    { name: 'Chicken a la mode', price: 8.18, description: 'Ice cream with chicken in it' },
];
},{}]},{},[1]);
