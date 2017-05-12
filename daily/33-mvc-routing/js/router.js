
let Router = require('ampersand-router');

module.exports = Router.extend({
    initialize: function () {
        console.log(this.views);
    },  
    routes: {
        // url hash : function to call
        'view': 'showAll',
        '': 'showAll', // setting a default view
        'add': 'addChair',
    },

    showAll: function () {
        console.log('show all');
        // show certain views, hide others
        this.views.group.el.classList.add('show');
        this.views.add.el.classList.remove('show');
    },

    addChair: function () {
        console.log('add chair');
        this.views.group.el.classList.remove('show');
        this.views.add.el.classList.add('show');
    },
});