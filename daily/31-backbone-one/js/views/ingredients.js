
module.exports = Backbone.View.extend({
    /* What should happen at the beginning */
    initialize: function () {
        // second 'this' is confusing, but you always want it.
        // if you wanna know, look up bind()
        this.model.on('change', this.render, this);
    },
    /* Events setup */
    /* IMO weirdest part of Backbone. We must deal with it. */
    events: {
        // '<event name> <element selector>' : '<function name>'
        'click #more-peas': 'addPea',
    },

    /* Event handler. This is what happens when someone clicks the button. */
    addPea: function () {
        console.log('peas, love em');
        this.model.increasePeas();
    },

    /* Not required, but I always make it */
    /* Everything related to displaying stuff in the DOM */
    render: function () {
        let button = this.el.querySelector('#more-peas');
        button.textContent = this.model.get('peas');
    },
});