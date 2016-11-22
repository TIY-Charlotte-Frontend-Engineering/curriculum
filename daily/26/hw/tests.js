import test from 'ava';

const validation = require('./hw');
const data = require('./data');

test('valid fields are valid', function (current) {
    data.valid.name.map(item => current.true(validation.name(item)));
    data.valid.phone.map(item => current.true(validation.phone(item)));
    data.valid.email.map(item => current.true(validation.email(item)));
    data.valid.address.map(item => current.true(validation.address(item)));
    data.valid.username.map(item => current.true(validation.username(item)));
    data.valid.url.map(item => current.true(validation.url(item)));
    data.valid.ipaddr.map(item => current.true(validation.ipaddr(item)));
});

test.only('invalid fields are invalid', function (current) {
    data.valid.name.map(item => current.false(validation.name(item)));
    data.valid.phone.map(item => current.false(validation.phone(item)));
    data.valid.email.map(item => current.false(validation.email(item)));
    data.valid.address.map(item => current.false(validation.address(item)));
    data.valid.username.map(item => current.false(validation.username(item)));
    data.valid.url.map(item => current.false(validation.url(item)));
    data.valid.ipaddr.map(item => current.false(validation.ipaddr(item)));
});