
module.exports = {
    // Property 1
    HomeView: Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
            this.render();
        },

        render: function () {
            this.el.innerHTML = '<h2>Home</h2>' +
                '<p>Money: $' + this.model.get('money') + '</p>' +
                '<p>Trinkets: ' + this.model.get('trinkets') + '</p>' +
                '<p>Exchange rate: ' + this.model.get('rate') + '</p>';
        }
    }),

    // Property 2
    BuyView: Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
            this.render();
        },

        events: {
            'click #buy-btn': 'buyTrinket',
        },

        buyTrinket: function () {
            if (this.model.get('money') >= this.model.get('rate')) {
                this.model.set('trinkets', this.model.get('trinkets') + 1);
                this.model.set('money', this.model.get('money') - this.model.get('rate'));
            }
        },
    }),

    // Property 3
    SellView: Backbone.View.extend({}),
};