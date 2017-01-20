
module.exports = Backbone.Model.extend({
    /* Built-in to Backbone. These are the starting values for each property */
    defaults: {
        peas: 100,
    },

    /* Increase the number of peas by one. Max 115 because reasons. */
    increasePeas: function () {
        // this.peas = this.peas + 1;
        // this.get('peas');            // get the value of 'peas'
        // this.set('peas', 5);         // set number of peas to 5
        if (this.get('peas') < 115) {
            this.set('peas', this.get('peas') + 1); // increase number of peas by 1
        }
    },
});