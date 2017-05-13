const View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#tpl-end').innerHTML,

    bindings: {
        'model.money': '.fares',
    },
});