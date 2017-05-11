let View = require('ampersand-view');

module.exports = View.extend({
    // Defining what the view looks like in the DOM
    template: '<article><h2 class="headline"></h2></article>',
    // Tie the model to the template
    bindings: {
        // model.property : querySelector for where it goes
        'model.headline': '.headline',
    },
    // Gets called whenever the model changes. What needs to
    // update?
    render: function () {
        // 'Use the template I already defined to render.'
        this.renderWithTemplate();
    }, 
});