let State = require('ampersand-state'); // how we create models

module.exports = State.extend({
    props: { // short for 'properties'
        headline: 'string',
        author: 'string',
        body: 'string',

        likes: 'number',
        dislikes: 'number',
    },
});