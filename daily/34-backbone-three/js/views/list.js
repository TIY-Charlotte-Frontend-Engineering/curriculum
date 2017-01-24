
// Create the EventListView
module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
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

        // Just searching for <ul> because it'll be the only UL inside
        // of the view kingdom. Preventing things from printing twice.
        this.el.querySelector('ul').innerHTML = '';

        // this.model is the collection
        // this.model.models is a Backbone thing. it's how we access the array 
        // of collections
        for (let i = 0; i < this.model.models.length; i++) {
            // m is a nickname for the current model. keeps me from having to 
            // type this over and over and saves me from making mistakes.
            const m = this.model.models[i];

            const li = document.createElement('li');

            // Pulling data from the model and putting it into the DOM.
            li.innerHTML = Mustache.render(
                template,
                {
                    id: m.get('id'),
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

            // Event listener
            const btn = li.querySelector('.remove');
            btn.addEventListener('click', () => {
                console.log('clicked on ' + m.get('name'));
                // Built-in to Backbone. Every collection has a remove() property.
                this.model.remove(m);
            });

            // Note: better to have this out of the loop so we don't re-retrieve it 
            // every time.
            const parent = this.el.querySelector('ul');
            parent.appendChild(li);
        }
    },
});