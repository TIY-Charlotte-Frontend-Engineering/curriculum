
let Router = require('ampersand-router');

module.exports = Router.extend({
    /**
     * Last concept: route params
     * 
     * Route params allow us to specify variables in the URL. For example
     * /view/5 would indicate we want to view details on chair #5, and
     * /view/8 would be the same thing but for chair #8.
     * 
     * We'd indicate this route with the pattern '/view/:id' - the colon
     * is what marks the route param.
     */
    routes: {
        // url hash : function to call
        'view': 'showAll',
        'details/:id': 'printDetailId',
        '': 'showAll', // setting a default view
        'add': 'addChair',
    },

    /* Usually you'd do more (show a view) but we'll keep it simple here */
    printDetailId: function (id) {
        console.log(id);
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