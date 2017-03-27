(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Separation of concerns
 * 
 * Big applications get way, way harder if everything is related to everything else.
 * You can avoid this by somehow 'separating' similar things from unrelated things.
 */
const IngredientsModel = require('./models/ingredients');
const IngredientsView = require('./views/ingredients');

/* First, create a model. */
// let IngredientsModel = 

/* Then work through how to display + interact with the model. */
// let IngredientView = 

window.addEventListener('load', function () {
    let ingredients = new IngredientsModel();

    let mainView = new IngredientsView({
        /* 
        The 'kingdom' the view is in charge of. All elements within this element 
        are solely controlled by this view. 
        */
        el: document.querySelector('body'), // el = element
        model: ingredients, // model = the model to update when times are changing
    });
});
},{"./models/ingredients":2,"./views/ingredients":3}],2:[function(require,module,exports){
/**
 * This is the function that controls the ajax requests and what we 
 * do when we get the response.
 */
Backbone.sync = function (method, model) {
    // console.log(method);
    // console.log(model);

    // We're trying to make a post request.
    if (method === 'create' || method === 'update') {
        const request = new XMLHttpRequest();
        request.open('POST', 'https://peapalace.org');
        request.addEventListener('load', function () {

        });

        const body = JSON.stringify({
            peas: model.get('peas'),
        })
        request.send(body); // pass a json string here
    }

};

module.exports = Backbone.Model.extend({
    /* Built-in to Backbone. These are the starting values for each property */
    defaults: {
        peas: 100,
        carrots: 0,
    },

    /* Increase the number of peas by one. Max 115 because reasons. */
    increasePeas: function () {
        // this.peas = this.peas + 1;
        // this.get('peas');            // get the value of 'peas'
        // this.set('peas', 5);         // set number of peas to 5
        if (this.get('peas') < 115) {
            this.set('peas', this.get('peas') + 1); // increase number of peas by 1
            this.save(); // function built in to all models

            // someone clicks increase button (view handler => model handler)
            // model increments # of peas
            // save() - sends the update to the server
            // when we get a response, update the model again
        }
    },

    
});
},{}],3:[function(require,module,exports){

module.exports = Backbone.View.extend({
    /* What should happen at the beginning */
    initialize: function () {
        // second 'this' is confusing, but you always want it.
        // if you wanna know, look up bind()
        this.model.on('change', this.render, this);
    },
    /* Events setup */
    /* IMO weirdest part of Backbone. We must deal with it. */
    events: {
        // '<event name> <element selector>' : '<function name>'
        'click #more-peas': 'addPea',
    },

    /* Event handler. This is what happens when someone clicks the button. */
    addPea: function () {
        console.log('peas, love em');
        this.model.increasePeas();
    },

    /* Not required, but I always make it */
    /* Everything related to displaying stuff in the DOM */
    render: function () {
        let button = this.el.querySelector('#more-peas');
        button.textContent = this.model.get('peas');
    },
});
},{}]},{},[1]);
