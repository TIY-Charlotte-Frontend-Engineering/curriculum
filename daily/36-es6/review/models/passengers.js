let Collection = require('ampersand-collection');
let PassengerModel = require('./passenger');

module.exports = Collection.extend({
    model: PassengerModel,

    addRandom: function () {
        this.add(new PasssengerModel({
            name: 'Random name',        // write a function to produce this
            occupation: 'Random job',   // write a function to produce this
            status: 'waiting',
        }));
    },

    updateLatest: function (status) {
        // update the last person in the array
        // this.at() gets the person at the specified index
        this.at(this.length - 1).status = status;
    },
});