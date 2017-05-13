const Collection = require('ampersand-collection');
const Passenger = require('./passenger');

/* Get a random name. */
function name() {
    let names = ['Frank', 'Janet', 'Harold', 'Bennett', 'Octavia'];
    let index = Math.floor(Math.random() * names.length);

    return names[index];
}

/* Get a random occupation. */
function occupation() {
    let occupations = ['Butcher', 'Baker', 'Candlestick maker'];
    let index = Math.floor(Math.random() * occupations.length);

    return occupations[index];
}

module.exports = Collection.extend({
    model: Passenger,

    /* Create a new passenger and add them. */
    createPassenger() {
        this.add(new Passenger({
            name: name(),
            occupation: occupation(),
            status: 'waiting',
        }));
    },

    /* Change the status of the last person in the array. */
    pickUp() {
        this.at(this.length - 1).status = 'picked_up';
    },

    /* Change the status of the last person in the array. */
    dropOff() {
        this.at(this.length - 1).status = 'dropped_off';
        this.createPassenger();
    },

    /* Return the status of the last person (the one that hasn't been picked up). */
    status() {
        return this.at(this.length - 1).status;
    },
});