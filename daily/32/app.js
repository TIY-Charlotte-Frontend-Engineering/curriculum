/**
 * Create a model to store one transaction. These will be
 * stored in the TransactionLog.
 */
let TransactionModel = Backbone.Model.extend({
    defaults: {
        label: 'Cornbread pudding',
        price: 1.00,
    },
});

/**
 * Container for all of the TransactionModels. Any time a new
 * transaction is created, it needs to be added here.
 */
let TransactionLog = Backbone.Collection.extend({
    // What it's made of. Roar.
    model: TransactionModel,
});

/**
 * View responsible for rendering the list of transactions as well
 * as adding new transactions.
 */
let TransactionView = Backbone.View.extend({
    initialize: function () {
        // 'When a new model gets added, call render()'
        this.model.on('add', this.render, this);
    },

    // Note: you cannot assign events to elements that
    // exist OUTSIDE OF THE KINGDOM.
    events: {
        'click #expense-add': 'addToTransactions',
    },

    // Not backbone-specific
    addToTransactions: function () {
        console.log('doo wap');
        // add a new Transaction to the TransactionLog
        let transaction = new TransactionModel();
        transaction.set('label', document.querySelector('#expense-label').value);
        transaction.set('price', parseFloat(document.querySelector('#expense-cost').value));

        this.model.push(transaction); // wut
    },

    // Make DOM do neat things.
    // Name is not Backbone-specific but I pretty much always use 
    // the same one.
    render: function () {
        let parent = this.el.querySelector('#transactions');
        parent.innerHTML = '';

        for (let x = 0; x < this.model.length; x++) {
            // this.model is a collection 
            // this.model.at(0) gives us element 0
            // this.model.at(0).get('label') gives us the label of element 0
            let label = this.model.at(x).get('label');
            let price = this.model.at(x).get('price');

            // Add to DOM
            let container = document.createElement('li');
            container.innerHTML = '<p>' + label + '</p><p>' + price + '</p>';
            parent.appendChild(container);
        }
    },
});

/**
 * Create a model (collection) and a view, and link them together.
 * The view can change anything in the #spender element.
 */
window.addEventListener('load', function () {
    let transactions = new TransactionLog();

    let view = new TransactionView({
        // Your kingdom is...
        el: document.querySelector('#spender'),
        // Use this data...
        model: transactions,
    });
});