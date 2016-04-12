var AddFoodView = require('./views/add-food');
var ListFoodView = require('./views/list-foods');
var FoodList = require('./models/foods');
//var foods = new FoodList();


module.exports = Backbone.Router.extend({
    initialize: function () {
        //        this.makeshiftModelNameNotPartOfBackbone
        this.foodModel = new FoodList();
        this.activeView = null;
    },
    routes: {
        // when url include #/add, call this.addFood()
        'add': 'addFood',
        // when url include #/list, call this.listFood()
        'list': 'listFoods',
    },
    addFood: function () {
        console.log('add a food');

        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }

        this.activeView = new AddFoodView({
            model: this.foodModel,
            el: document.getElementById('add-food-section'),
        });
        this.activeView.render();
    },
    listFoods: function () {
        console.log('list the foods');

        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }

        this.activeView = new ListFoodView({
            model: this.foodModel,
            el: document.getElementById('list-food-section'),
        });
        this.activeView.render();
    }
});