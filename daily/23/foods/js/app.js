// var _ = require('underscore');

// foods = array of objects
// type = Vegetable or Meat or Drink
function filterFoods(foods, category) {
    for (var i = 0; i < foods.length; i++) {
        // Show it.
        if (foods[i].type === category) {
            // get the element
            // remove the hidden class from it
            var hit = document.getElementById('food-' + foods[i].id);
            hit.classList.remove('hidden');
            // Hide it.
        } else {
            var miss = document.getElementById('food-' + foods[i].id);
            miss.classList.add('hidden');
        }
    }
}

window.addEventListener('load', function () {
    var foods = require('./foods');

    // Rendering foods at the beginning
    var parent = document.getElementById('results');
    var generator = _.template(document.getElementById('food-template').textContent);

    for (var i = 0; i < foods.length; i++) {
        var html = generator({
            food: {
                name: foods[i].name,
                type: foods[i].type,
                suggestions: foods[i].suggestions,
            },
        });

        var el = document.createElement('div');
        el.classList.add('food');
        // set the ID for this element.
        el.setAttribute('id', 'food-' + foods[i].id);

        el.innerHTML = html;
        parent.appendChild(el);
    }

    // Make radio buttons do something.
    var veg = document.getElementById('type-vegetables');
    veg.addEventListener('click', function () {
        filterFoods(foods, 'Vegetable');
    });

    var meat = document.getElementById('type-meats');
    meat.addEventListener('click', function () {
        filterFoods(foods, 'Meat');
    });
});