let View = require('ampersand-view');

module.exports = View.extend({
    // Defining what the view looks like in the DOM
    template: document.querySelector('#article-template').innerHTML,
    // Tie the model to the template
    bindings: {
        // model.property : querySelector for where it goes
        'model.headline': '.headline',
        'model.author': '.author',
        'model.body': '.body',
        'model.likes': '.like-count',
    },
    // Set up event listeners
    events: {
        // 'event selector': 'function'
        'click .like': 'likeIt',
    },

    likeIt: function () {
        this.model.likes++;
    },

    // Gets called whenever the model changes. What needs to
    // update?
    render: function () {
        // 'Use the template I already defined to render.'
        this.renderWithTemplate();
    }, 
});