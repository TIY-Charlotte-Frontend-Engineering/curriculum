const EventModel = require('./event'); // import the model

/**
 * You use a collection when your primary data is an array.
 */

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

        this.add(newEvent);
    },
});