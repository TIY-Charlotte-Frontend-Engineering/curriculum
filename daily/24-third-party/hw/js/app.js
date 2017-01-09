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

