let View = require('ampersand-view');

module.exports = View.extend({
    // template
    // render
    // initialize
    // bindings

    // How this view should look in the DOM. Same idea as Mustache templates.
    template: document.querySelector('#store-template').innerHTML,
    // Bindings allow us to connect data from the model to specific elements
    // in the view.
    bindings: {
        // Take the data from the 'parrots' property of model and put it
        // in the element with class="parrots"
        'model.parrots': '.parrots',
        'model.doubloons': '.doubloons',
        'model.pigeons': '.pigeons',
    },

    // How do we render the right HTML? Usually involves connected data
    // from the model with the template.
    render: function() {
        // this.el is the element we're showing HTML in
        // this.model is where our data comes from
        // this.el.innerHTML = this.template;
        this.renderWithTemplate();  // Ampersand: use template and bindings
                                    // to update the DOM.
    },
});