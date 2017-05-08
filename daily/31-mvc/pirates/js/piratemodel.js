// ampersand-state is a 'model' in ampersand
let State = require('ampersand-state');

// .extend allows us to create our own customized model
module.exports = State.extend({
    // define the properties in the model object
    props: {
        // name : type
        doubloons: 'number',
        parrots: 'number',
        pigeons: 'number',
    },
});
