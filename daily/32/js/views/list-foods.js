module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        console.log('listening for change event');
    },
    template: _.template(document.getElementById('list-item-template').textContent),
    render: function () {
        console.log('info changed');
        this.el.innerHTML = 'list all the foods';
        var content = [];

        var noms = this.model.get('foods');
        for (var i = 0; i < noms.length; i++) {
            var html = this.template({
                name: noms[i].name,
                calories: noms[i].calories,
            });
            console.log(html);
            content.push(html);
        }

        console.log(content.join(''));
        this.el.innerHTML = content.join('');
    },
});