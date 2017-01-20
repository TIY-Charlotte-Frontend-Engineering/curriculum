import test from 'ava';

const validation = require('./hw');
const data = require('./data');

const fields = ['name', 'phone', 'email', 'address', 'username', 'url', 'ipaddr'];
// const fields = ['email'];

fields.forEach(field => {
    test(`successfully validating ${field}`, current => {
        data.valid[field].map(item => current.true(validation[field](item), `Rejected valid ${field}: '${item}'`));
        data.invalid[field].map(item => current.false(validation[field](item), `Accepting invalid ${field}: '${item}'`));
    });
});