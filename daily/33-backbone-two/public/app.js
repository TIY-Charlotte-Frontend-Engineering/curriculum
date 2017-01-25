(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const EventModel = require('./models/event');
const EventList = require('./models/eventlist');
const EventView = require('./views/event');


window.addEventListener('load', function () {
    // const event = new EventModel(); // create an event 
    const list = new EventList();

    // When we create a view, it need to have a this.el and
    // this.model to do its job. This is when we assign those.
    const view = new EventView({
        el: document.querySelector('body'), // one view to rule them all
        model: list,
    });
    view.render();
});
},{"./models/eventlist":3,"./views/event":4}],2:[function(require,module,exports){

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
},{}],3:[function(require,module,exports){
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
},{"./event":2}],4:[function(require,module,exports){

/**
 * 1. event listeners and handlers
 * 2. render the DOM
 * 3. initialize so we know when the model changes
 */
module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },

    events: {
        'click #go': 'updateEvent',
    },

    /* Handler for the button click */
    updateEvent: function () {
        // Do DOM stuff in the view, not the model
        const newName = this.el.querySelector('#name').value;
        // this.model.changeName(newName);
        this.model.createNew(newName);
    },

    /* Not required to have this name but oh so nice */
    render: function () {
        // console.log('rendering');
        // get the dom element
        // get the content that should go in the dom element
        // update
        // const event = this.el.querySelector('#list-events h2');
        // event.textContent = this.model.get('name');

        // In a collection, we need a way to get the models themselves.
        // They're accessible through a property called 'models'.
        const template = document.querySelector('#event-template').innerHTML;

        this.el.querySelector('#list-events').innerHTML = '';

        for (let i = 0; i < this.model.models.length; i++) {
            const m = this.model.models[i];

            const li = document.createElement('li');

            // li.textContent = m.get('name');
            li.innerHTML = Mustache.render(
                template,
                {
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

            const btn = li.querySelector('.remove');
            btn.addEventListener('click', () => {
                console.log('clicked on ' + m.get('name'));
                this.model.remove(m);
            });

            const parent = this.el.querySelector('#list-events');
            parent.appendChild(li);
        }
    },
});
},{}]},{},[1]);
