/**
 * There are a couple of important things here that are going to be important 
 * for getting Mastermind working correctly. Please READ ALL COMMENTS. We'll 
 * go into more depth on ajax in Backbone next week.
 * 
 * THINGS TO NOTICE
 * 1. In class we were using a 'change' event to know when to re-render the view.
 *    We still want to do that here, but there's an important extra step when you're
 *    modifying arrays instead of primitives (numbers, booleans, strings, etc). See
 *    the function below, but short version is you have to trigger the event manually.
 * 
 * 2. Models have a save() property that will create an ajax request to attempt to
 *    send the model to the server. This can be really slick but will need to be 
 *    customized for the (good) approach many of you are taking. Look at Backbone.sync()
 *    below for more information on how to control what ajax requests are sent.
 * 
 * 3. Backbone.sync is where all model-related ajax stuff goes. The method and model 
 *    param are described more here: http://backbonejs.org/#Sync.
 * 
 * 4. The Guess constructor is optional here.
 * 
 * 5. You'll very likely need to customize the ajax stuff in Backbone.sync. I think 
 *    most people were planning on using POST requests for sending guesses, and getting 
 *    a response back from the server containing all of the guesses.
 */

function Guess(guess) {
    this.guess = guess;
    this.exact = null; // right color, right position
    this.close = null; // right color, wrong position

    return this;
}

/**
 * ALL model-related ajax calls in Backbone are passed through Backbone.sync. 
 * There's a default implementation of this but it's not going to be 
 * particularly useful for Mastermind (we'll use it next week though).
 * 
 * Instead we'll create a custom function; this function will automatically be
 * called whenever we save() our model.
 */
Backbone.sync = function(method, model) {
    /**
     * Creating new object or updating an existing one; this will be the value
     * of 'method' whenever you save().
     */
    if (method === 'create' || method === 'update') {
        const req = new XMLHttpRequest();
        req.open('POST', 'http://nowhere.org');
        req.addEventListener('load', function () {
            const response = JSON.parse(req.responseText);
            /**
             * Update the turn number and guess information now that we have the 
             * latest from the server. 
             */
            model.set('turn', response.turn);
            model.set('guesses', response.guesses);
            /* Triggering the change event will make your view re-render. */
            model.trigger('change');
        });
        req.send();
        model.set('turn', 1);
    }
    
    /* You probably won't need GET, but if you do its method is called 'read' */
};

const TestModel = Backbone.Model.extend({
    defaults: {
        turn: 0,
        guesses: [],
    },

    /**
     * This is the function I'd actually want to call in my view whenever its 
     * time to make a new guess.
     */
    makeGuess(guess) {
        /* Get the array, push new guess into it, store it again */
        const guesses = this.get('guesses');
        guesses.push(new Guess(guess));

        this.set('guesses', guesses);
        /**
         * IMPORTANT
         * 
         * In this case we've technically "changed" the guesses array but Backbone 
         * won't count it as a change since its still the same array (Backbone thinks
         * of 'change' as 'changed to a different array', whereas here we're just
         * modifying the existing array).
         * 
         * We can trigger the change event manually, though.
         */
        this.trigger('change');
    },
});

/**
 * This is a very basic model that I'm modifying on page load. In your actual app
 * you'll be making these modifications in your view, so IT WILL DO YOU NO GOOD to
 * copy this.
 * 
 * 1. We're creating a model.
 * 2. We're modifying it.
 * 3. We're 'saving' those changes, which means 'let the server know something changed.'
 *    This will fire off an ajax request, which in Backbone is taken care of in the
 *    Backbone.sync function (see above). save() is a built-in function in Backbone.
 */
window.addEventListener('load', function () {
    let game = new TestModel();

    game.makeGuess(['r', 'g', 'o', 'p']); // guess red, green, orange, purple
    /* Call save whenever you want to make a request to the server. */
    game.save();
});