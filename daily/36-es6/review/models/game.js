let State = require('ampersand-state');

module.exports = State.extend({
    props: {
        taxi_x: 'number',
        taxi_y: 'number',
        passenger_x: 'number',
        passenger_y: 'number',
        fare: 'number',     // amount of money we have
    },

    placePassenger: function () {
        this.passenger_x = Math.floor(Math.random() * 20); // random loc
        this.passenger_y = Math.floor(Math.random() * 20); // random loc
    },
});