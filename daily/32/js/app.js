window.addEventListener('load', function () {
    // Load a model that keeps track of foods
    var FoodRouter = require('./router');

    var router = new FoodRouter();
    Backbone.history.start();
    // Create a router that toggles between the two

    // Create an 'add' view
    // Create a 'list' view
});