let View = require('ampersand-view');
let ArticleView = require('./article');

module.exports = View.extend({
    template: document.querySelector('#article-list-template').innerHTML,
    render: function () {
        // render the <h2> and <ul> (stuff for the collection)
        this.renderWithTemplate();
        // render each item in the collection
        //  Argument 1: what collection to render (usually this.collection)
        //  Argument 2: what view to use for each
        //  Argument 3: where to put them in the DOM
        this.renderCollection(this.collection, ArticleView, this.el.querySelector('ul'));
    },
});