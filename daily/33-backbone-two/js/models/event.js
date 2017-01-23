
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

        // let guesses = this.get('guesses');
        // guesses.push('rgrg');
        // this.set('guesses', guesses);
        // this.trigger('change');
    },
});