// 1. Writing a model
let FabricModel = Backbone.Model.extend({
    defaults: {
        name: 'Mystery cloth',
        softness: 11,
        quantity: 48,
    },
});

// 2. Create a view.
let FabricView = Backbone.View.extend({
    // What to do when the view is set up.
    initialize: function () {
        console.log('getting going');
        // We want this view to update whenever the model changes.
        // this.model.on('change', function-to-call, this);
        this.model.on('change', this.render, this);
    },

    // Events to be set up.
    events: {
        // Weird.
        // "event element": "function"
        // When #update-fabric is clicked, call updateErOnUp()
        'click #update-fabric': 'updateErOnUp',
    },

    // What to do when the button is clicked.
    updateErOnUp: function () {
        // Modify the model.
        this.model.set('name', document.querySelector('#name').value);
        this.model.set('softness', document.querySelector('#softness').value);
        this.model.set('quantity', document.querySelector('#amount').value);
    },

    // How to render the DOM
    render: function () {
        document.querySelector('#fabric-name').textContent = this.model.get('name');
        document.querySelector('#fabric-softness').textContent = this.model.get('softness');
        document.querySelector('#fabric-amount').textContent = this.model.get('quantity');
    },
});

window.addEventListener('load', function () {
    // Doesn't need any more info.
    let actualModel = new FabricModel();
    // 
    let view = new FabricView({
        // needs to be called 'el'
        el: document.querySelector('body'),
        // needs to be called 'model'
        model: actualModel,
    });
});
