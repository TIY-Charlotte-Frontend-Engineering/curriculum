let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#add-chair-template').innerHTML,

    events: {
        'click button': 'submitNewChair',
    },

    submitNewChair: function () {
        console.log('adding new chair');

        // Example: add new chair to the collection

        // navigate to the 'view' route (defined in our router)
        this.router.navigate('view');
    },
});