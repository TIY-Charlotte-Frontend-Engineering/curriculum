
/**
 * This is the function that determines how we 'sync' information, which
 * could mean GET'ing or POST'ing.
 * 
 * - method will be one of { create, update, read, delete }
 *                           POST    PUT     GET   DELETE
 * - model is the model that's being saved
 */
Backbone.sync = function (method, model) {
    // Somewhere in our code we're trying to save changes to the server.
    if (method === 'create' || method === 'update') {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://eventurl');
        
        let message = {
            name: model.get('name'),
            attendees: model.get('attendees'),
        };

        request.send(JSON.stringify(message));
    }

    // Somewhere in our code we're trying to get info from the server.
    if (method === 'read') {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://eventurl');
        request.addEventListener('load', function () {
            const response = JSON.parse(request.responseText);

            for (let i = 0; i < response.chats.length; i++) {
                // note: i would create an 'id' property in your chatmodel
                // msg = new ChatModel(); <=== make a new ChatModel for each of response.chats
                // msg.set('from', response.chats[i].from);
                // model.add(msg);
            }
            // lets say response is event info
            // model.set('name', response.name);
            // model.set('attendees', response.attendees);
            // model.set('when', response.when);
            // model.trigger('change');            
        });
        request.send();
    }
};

module.exports = Backbone.Model.extend({
    /* Initial values for all the properties. */
    defaults: {
        id: null,
        name: 'Unknown event',
        when: '2017-10-11',
        attendees: 10,
    },

    /* Update this model's name to 'name' */
    changeName(val) {
        // Important: i'm passing in the string, NOT accessing the 
        // DOM here.
        this.set('name', val);
        this.save();

        // let guesses = this.get('guesses');
        // guesses.push('rgrg');
        // this.set('guesses', guesses);
        // this.trigger('change');
    },
});