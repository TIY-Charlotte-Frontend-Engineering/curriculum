
module.exports = Backbone.Router.extend({
    initialize: function () {

    },

    routes: {
        'home': 'goHome',
        'buy': 'buyTime',
        'sell': 'sellTime',
    },

    goHome: function () {
        console.log('go home forst');
        // Show the home view
        // Hide the buy view 
        // Hide the sell view
    },

    buyTime: function () {
        console.log('buytime');
    },

    sellTime: function () {
        console.log('selltime');
    },
});