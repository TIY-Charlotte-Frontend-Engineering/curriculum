let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#status-template').innerHTML,

    bindings: {
        'model.likes': '.like',
        'model.dislikes': '.dislike',
    },
    
    render: function () {
        this.renderWithTemplate();
    },
});