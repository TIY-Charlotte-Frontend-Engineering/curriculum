module.exports = Backbone.View.extend({
    events: {
        'click #submit-food': 'addFood',
    },
    // create a new template
    template: _.template(document.getElementById('add-template').textContent),
    render: function () {
        // set the innerHTML to the string that comes back from the template
        // function. note: you need to call the template function
        this.el.innerHTML = this.template();
    },

    addFood: function () {
        console.log('adding a food in the model');
        this.model.storeInFridge({
            name: document.getElementById('food-name').value,
            calories: document.getElementById('food-calories').value,
        }); // tbd
    },

    moveGuyUp: function (event) {

    },
});