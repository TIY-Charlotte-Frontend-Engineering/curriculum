
module.exports = Backbone.View.extend({
    /**
     * Here we're giving render an ID because its the ID
     * of the model we want to render. We do NOT want to 
     * render all models here, and this.model is a COLLECTION
     * of models so we need to know which one.
     */
    render: function (id) {
        const m = this.model.getId(id);

        const template = document.querySelector('#details-template').innerHTML;

        this.el.innerHTML = Mustache.render(
            template,
            {
                name: m.get('name'),
                attendees: m.get('attendees'),
                date: m.get('when'),
            }
        )
    }
});