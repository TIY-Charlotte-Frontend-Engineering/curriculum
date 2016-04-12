module.exports = Backbone.Model.extend({
    defaults: {
        foods: [],
    },
    add: function (food) {
        // add a food
        console.log('adding a food');
    },
});