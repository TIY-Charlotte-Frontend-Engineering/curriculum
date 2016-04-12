module.exports = Backbone.Model.extend({
    defaults: {
        foods: [],
    },
    storeInFridge: function (food) {
        // add a food
        var noms = this.get('foods');
        noms.push(food);
        this.set('foods', noms);
        this.trigger('change', this);

        console.log('Model has ' + noms.length + ' foods');
        console.log(noms);
    },
});