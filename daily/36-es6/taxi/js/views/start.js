const View = require('ampersand-view');

/**
 * Start the game. Instead of saving the car, I'm setting the properties
 * that the car effects. In particular I need two properties, one for
 * gas consumption and one for the fare.
 */

module.exports = View.extend({
    template: document.querySelector('#tpl-start').innerHTML,

    events: {
        'click #hyb': 'pickHybrid',
        'click #guz': 'pickGuzzler',
    },

    pickHybrid() {
        this.model.car_gas_loss = 1;
        this.model.car_fare_amt = 10;

        this.router.navigate('play');
    },

    pickGuzzler() {
        this.model.car_gas_loss = 2;
        this.model.car_fare_amt = 20;

        this.router.navigate('play');
    },
});