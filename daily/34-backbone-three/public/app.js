(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const EventModel = require('./models/event');
const EventList = require('./models/eventlist');
const CreateEventView = require('./views/create');
const ListEventView = require('./views/list');
const DetailedEventView = require('./views/details');

const AppRouter = require('./router');

window.addEventListener('load', function () {
    // const event = new EventModel(); // create an event 
    const list = new EventList();

    // When we create a view, it need to have a this.el and
    // this.model to do its job. This is when we assign those.
    const createView = new CreateEventView({
        el: document.querySelector('#create-event'),
        model: list,
    });
    // Optional to call here; this is only here because we want
    // it to render on page load. This 'render()' function is the
    // same one we defined in our view.
    createView.render();

    // Calling the createNew function on the collection.
    list.createNew('Toy Soldier Trade Show');
    list.createNew('Dog Walking Competition');
    list.createNew('Pasta Stir-off');

    const listView = new ListEventView({
        el: document.querySelector('#list-events'),
        model: list,
    });
    listView.render();

    const detailedView = new DetailedEventView({
        el: document.querySelector('#details-view'),
        model: list,
    });
    // #lukefail - we don't want to render this now 
    // because we don't have enough info to do it.
    // detailedView.render();
    
    const oldies = new EventList();
    // TODO: create a view that's tied to oldies

    // a and b are wonky names, doing that for 
    // demonstration. please dont name your variables
    // like this in your interview thanks.
    const app = new AppRouter({
        a: listView,
        b: createView,
        c: detailedView,
    });

    // This is another weird backbone thing. Historically, browsers
    // didn't count changes in URL fragments as different 'page visits',
    // so pressing the back button would skip all of them. This fixes
    // that and is pretty important.
    Backbone.history.start();
});
},{"./models/eventlist":3,"./router":4,"./views/create":5,"./views/details":6,"./views/list":7}],2:[function(require,module,exports){

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
},{}],3:[function(require,module,exports){
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
},{"./event":2}],4:[function(require,module,exports){

/* Create a new router. */
module.exports = Backbone.Router.extend({
    // 'views' can be anything (including macaroni)
    // this is passed in from the constructor. views.a
    // is the listView (see app.js).
    //
    // we're doing this because we need the views in our
    // router.
    initialize: function (views) {
        // When I pass the obj into the AppRouter
        // constructor, it gets passed as a param
        // to initialize().
        console.log(views);
        // Save the views to the Router so that we 
        // can access them from anywhere in the router.
        // 'this' refers to the router, see showCreate()
        // down below for how we use it
        this.views = views;
    },

    // Built-in. When someone goes to #create, run the 
    // showCreate() function. Normally these will toggle
    // visibility.
    //
    // 'create' needs to match the hashtag name.
    // this is saying 'when someone visits #create call function
    // showCreate()'
    routes: {
        // Set the 'home page', i.e. when there's no hash fragment
        // by setting an empty route.
        '': 'hideAll',
        'create': 'showCreate',
        'list': 'showList',
        // colon means that we've got a variable here
        'details/:eventId': 'showDetailed',
    },

    // eventId from the route is being passed in as the ID 
    // for showDetailed. The name eventId is unimportant.
    showDetailed: function (id) {
        // id = parseInt(id);
        console.log('good day')
        // console.log('got event id ' + eventId)
        // hide the other views
        // tell detailed view which event to show
        this.views.c.render(id);
        // show the detailed view 
    },

    hideAll: function () {
        this.views.a.el.classList.add('hidden');    // hide 
        this.views.b.el.classList.add('hidden');    // hide 
    },

    /**
     * Toggling the visibility of views.
     */
    showCreate: function () {
        console.log('showing create');
        this.views.a.el.classList.add('hidden');    // hide 
        this.views.b.el.classList.remove('hidden'); // show
    },

    showList: function () {
        console.log('showing list');
        this.views.a.el.classList.remove('hidden'); // hide 
        this.views.b.el.classList.add('hidden');    // show
    },
});
},{}],5:[function(require,module,exports){

/**
 * 1. event listeners and handlers
 * 2. render the DOM
 * 3. initialize so we know when the model changes
 */
module.exports = Backbone.View.extend({
    events: {
        'click #go': 'updateEvent',
    },

    /* Handler for the button click */
    updateEvent: function () {
        // Do DOM stuff in the view, not the model
        const newName = this.el.querySelector('#name').value;
        this.model.createNew(newName);
    },

    render: function () {

    },
});
},{}],6:[function(require,module,exports){

module.exports = Backbone.View.extend({
    /**
     * Here we're giving render an ID because its the ID
     * of the model we want to render. We do NOT want to 
     * render all models here, and this.model is a COLLECTION
     * of models so we need to know which one.
     */
    render: function (id) {
        const m = this.model.getId(id);

        const template = document.querySelector('#details-template').innerHTML;

        this.el.innerHTML = Mustache.render(
            template,
            {
                name: m.get('name'),
                attendees: m.get('attendees'),
                date: m.get('when'),
            }
        )
    }
});
},{}],7:[function(require,module,exports){

// Create the EventListView
module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
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

        // Just searching for <ul> because it'll be the only UL inside
        // of the view kingdom. Preventing things from printing twice.
        this.el.querySelector('ul').innerHTML = '';

        // this.model is the collection
        // this.model.models is a Backbone thing. it's how we access the array 
        // of collections
        for (let i = 0; i < this.model.models.length; i++) {
            // m is a nickname for the current model. keeps me from having to 
            // type this over and over and saves me from making mistakes.
            const m = this.model.models[i];

            const li = document.createElement('li');

            // Pulling data from the model and putting it into the DOM.
            li.innerHTML = Mustache.render(
                template,
                {
                    id: m.get('id'),
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

            // Event listener
            const btn = li.querySelector('.remove');
            btn.addEventListener('click', () => {
                console.log('clicked on ' + m.get('name'));
                // Built-in to Backbone. Every collection has a remove() property.
                this.model.remove(m);
            });

            // Note: better to have this out of the loop so we don't re-retrieve it 
            // every time.
            const parent = this.el.querySelector('ul');
            parent.appendChild(li);
        }
    },
});
},{}]},{},[1]);
