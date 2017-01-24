const EventModel = require('./event'); // import the model

/**
 * You use a collection when your primary data is an array.
 */
let nextId = 0;

module.exports = Backbone.Collection.extend({
    // Type of model stored in this collection.
    // Every collection contains some type of model.
    model: EventModel,

    createNew: function (newName) {
        console.log('creating new model');
        // Create a new model and set its name.
        // Add the new model to the collection.
        const newEvent = new EventModel();
        newEvent.set('name', newName);
        newEvent.set('attendees', 20);
        // closures, cool!!
        newEvent.set('id', nextId++);

        this.add(newEvent);
    },

    /* Made this up */
    getId: function (numero) {
        console.log('getting id ' + numero);
        for (let i = 0; i < this.models.length; i++) {
            console.log(this.models[i].get('id'));
            console.log(numero);

            if (this.models[i].get('id') === numero) {
                return this.models[i];
            }
        }

        // let matches = this.models.filter(function (model) {
        //     if (model.get('id') === numero) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        // return matches[0];
    },
});