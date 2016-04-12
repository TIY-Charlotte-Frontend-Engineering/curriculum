// New character view: shows a form to create a new character
module.exports = Backbone.View.extend({
    events: {
        'click #create-player': 'newCharacter', // when button is clicked, update model with name
    },
    template: _.template(document.getElementById('new-player-template').textContent),
    render: function () {
        this.el.innerHTML = this.template();
    },

    newCharacter: function () {
        var name = document.getElementById('player-name').value;
        this.model.set('name', name);
    },
});