window.addEventListener('load', function () {
    var foods = require('./foods');

    // Render all the things
    var parent = document.getElementById('results');
    var generator = _.template(document.getElementById('food-template').textContent);
    for (var i = 0; i < foods.length; i++) {
        var html = generator({
            food: foods[i],
        });

        var el = document.createElement('div');
        el.classList.add('food');
        el.setAttribute('id', 'food-' + foods[i].id);
        el.innerHTML = html;

        parent.appendChild(el);
    }

    // Filter on regular expressions
    var search = document.getElementById('search-box');
    search.addEventListener('keyup', function () {
        var word = search.value;
        var pattern = new RegExp(search.value);

        // search through `foods`
        // using a for loop
        // does this element's name match the regular expression?
        for (var i = 0; i < foods.length; i++) {
            var element = document.getElementById('food-' + foods[i].id);
            if (pattern.test(foods[i].name)) {
                // Show it
                element.classList.remove('hidden');
            } else {
                // Hide it
                element.classList.add('hidden');
            }
        }
    });

    $('.food').draggable();
    $('h1').droppable({
        drop: function (e, thud) {
            console.log(e);

            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(5));

            for (var i = 0; i < foods.length; i++) {
                // Find the item to change, then change it.
                if (foods[i].id === id) {
                    foods[i].name = 'OMG ITS ' + foods[i].name;
                }
            }
            console.log(foods);
            // what element just got dropped?
            // change the element: change the name

        },
    });
});