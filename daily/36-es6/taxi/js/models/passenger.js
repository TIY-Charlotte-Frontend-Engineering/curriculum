const State = require('ampersand-state');

module.exports = State.extend({
    props: {
        name: 'string',
        occupation: 'string',
        status: 'string',   // 'waiting', 'in_vehicle', 'arrived'
    },
});