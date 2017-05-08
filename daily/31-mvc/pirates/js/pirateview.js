let View = require('ampersand-view');

module.exports = View.extend({
    // template
    // render
    // initialize
    // bindings

    // How this view should look in the DOM. Same idea as Mustache templates.
    template: '<p class="doubloons">15</p>',

    // How do we render the right HTML? Usually involves connected data
    // from the model with the template.
    render: function() {
        // this.el is the element we're showing HTML in
        // this.model is where our data comes from
        this.el.innerHTML = this.template;
    },
});