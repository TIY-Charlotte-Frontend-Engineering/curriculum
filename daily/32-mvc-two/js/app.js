
/**
 * Models store data. Never ever doing DOM stuff here.
 * Once? Too many times. Never.
 * 
 * Views present data - its what the user sees and interacts
 * with (buttons, sliders, text). All DOM stuff goes here.
 *      - template (html and dom elements)
 *      - events (click, etc)
 *      - bindings
 */

// 1. Lets move template into HTML and add author and body
// 2. Add a like button and dislike button
// 3. Default values for models
// 4. Second view
window.addEventListener('load', function () {
    let ArticleModel = require('./models/article');
    // let ArticleView = require('./views/article');
    // let StatusView = require('./views/status');

    let ArticleCollection = require('./models/articlelist');
    let ArticleListView = require('./views/articlelist');

    // 1. Create an instance of a model (new Article())
    let article = new ArticleModel({
        headline: 'Gingerbread Man retires',
        author: 'The Baker',
        body: 'Yep, havent heard from him in days. Must be happily "retired."',
        likes: 14,
        dislikes: 3,
    });

    let article2 = new ArticleModel({
        headline: 'The Baker expanding business empire',
        author: 'Gingerbread Lady',
        body: 'Hes had a lot of time to focus on work recently.',
        likes: 10,
        dislikes: 5,
    });

    let list = new ArticleCollection([article, article2]);

    let listView = new ArticleListView({
        el: document.querySelector('main'),
        collection: list,
    });

    listView.render();

    // 2. Create an instance of a view. Any time I create a view, I
    // specify where it shows up in the DOM (el) and what data it uses
    // to render (model)
    // let showArticle = new ArticleView({
    //     el: document.querySelector('main'),
    //     model: article,
    // });

    // let showStatus = new StatusView({
    //     el: document.querySelector('#status'),
    //     model: article,
    // });

    // Challenge: create a second view that displays the
    // text "This article has x likes and y dislikes" (replace
    // with actual number of each).
    //      - You'll need two different DOM elements, one per view
    //      - Tie the second view to the article model
    //      - You don't need events, etc for the second view

    // 3. Render the view once at the beginning
    // showArticle.render();
    // showStatus.render();
});