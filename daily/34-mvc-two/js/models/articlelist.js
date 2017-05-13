/**
 * Collections are arrays of models. They're a lot like 
 * models but have a few array-specific features.
 * 
 * Views for collections are a little different as well,
 * but we'll look into that in a bit.
 */

let Collection = require('ampersand-collection');
let ArticleModel = require('./article');

module.exports = Collection.extend({
    model: ArticleModel, // what does this collection contain?
});