module.exports = Backbone.Router.extend({
    routes: {
        // when url include #/add, call this.addFood()
        'add': 'addFood',
        // when url include #/list, call this.listFood()
        'list': 'listFoods',
    },
    addFood: function () {
        console.log('add a food');
    },
    listFoods: function () {
        console.log('list the foods');
    }
});