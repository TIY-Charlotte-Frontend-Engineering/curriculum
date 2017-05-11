
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
    let ArticleView = require('./views/article');

    // 1. Create an instance of a model (new Article())
    let article = new ArticleModel();
    article.headline = 'Gingerbread Man retires';
    article.author = 'The Baker';
    article.body = 'Yep, havent heard from him in days. Must be happily "retired."';

    // 2. Create an instance of a view. Any time I create a view, I
    // specify where it shows up in the DOM (el) and what data it uses
    // to render (model)
    let showArticle = new ArticleView({
        el: document.querySelector('main'),
        model: article,
    });

    // 3. Render the view once at the beginning
    showArticle.render();
});