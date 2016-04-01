var Firebase = require('firebase');

function Food(name, store) {
    this.id = Math.round(Math.random() * 10000);
    this.name = name;
    this.store = store;

    return this;
}

window.addEventListener('load', function () {
    var button = document.getElementById('send-it-in');
    button.addEventListener('click', function () {
        console.log('clicked');
        var food_name = document.getElementById('food-name').value;
        var food_store = document.getElementById('food-store').value;

        var food = new Food(food_name, food_store);
        console.log(food);

        var fb = new Firebase('https://creation-machine.firebaseio.com/foods/' + food.id);
        // fb.set(object, callback)
        fb.set(food, function () {
            console.log('data has been saved');
        });
    });

    var pull = new Firebase('https://creation-machine.firebaseio.com/foods/');
    pull.once('value', function (hedgehog) {
        console.log(hedgehog.val());
    });
});