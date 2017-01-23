
/**
 * 1. event listeners and handlers
 * 2. render the DOM
 * 3. initialize so we know when the model changes
 */
module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },

    events: {
        'click #go': 'updateEvent',
    },

    /* Handler for the button click */
    updateEvent: function () {
        // Do DOM stuff in the view, not the model
        const newName = this.el.querySelector('#name').value;
        // this.model.changeName(newName);
        this.model.createNew(newName);
    },

    /* Not required to have this name but oh so nice */
    render: function () {
        // console.log('rendering');
        // get the dom element
        // get the content that should go in the dom element
        // update
        // const event = this.el.querySelector('#list-events h2');
        // event.textContent = this.model.get('name');

        // In a collection, we need a way to get the models themselves.
        // They're accessible through a property called 'models'.
        const template = document.querySelector('#event-template').innerHTML;

        this.el.querySelector('#list-events').innerHTML = '';

        for (let i = 0; i < this.model.models.length; i++) {
            const m = this.model.models[i];

            const li = document.createElement('li');

            // li.textContent = m.get('name');
            li.innerHTML = Mustache.render(
                template,
                {
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

            const btn = li.querySelector('.remove');
            btn.addEventListener('click', () => {
                console.log('clicked on ' + m.get('name'));
                this.model.remove(m);
            });

            const parent = this.el.querySelector('#list-events');
            parent.appendChild(li);
        }
    },
});