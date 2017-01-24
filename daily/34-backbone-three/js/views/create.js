
/**
 * 1. event listeners and handlers
 * 2. render the DOM
 * 3. initialize so we know when the model changes
 */
module.exports = Backbone.View.extend({
    events: {
        'click #go': 'updateEvent',
    },

    /* Handler for the button click */
    updateEvent: function () {
        // Do DOM stuff in the view, not the model
        const newName = this.el.querySelector('#name').value;
        this.model.createNew(newName);
    },

    render: function () {

    },
});