import test from 'ava';

const validation = require('./hw');
const data = require('./data');

test('valid fields are valid', function (current) {
    for (let i = 0; i < data.valid.name.length; i++) {
        current.true(validation.name(data.valid.name[i]));
    }

    for (let i = 0; i < data.valid.phone.length; i++) {
        current.true(validation.phone(data.valid.phone[i]));
    }

    for (let i = 0; i < data.valid.email.length; i++) {
        current.true(validation.email(data.valid.email[i]));
    }

    for (let i = 0; i < data.valid.address.length; i++) {
        current.true(validation.address(data.valid.address[i]));
    }

    for (let i = 0; i < data.valid.username.length; i++) {
        current.true(validation.username(data.valid.username[i]));
    }

    for (let i = 0; i < data.valid.url.length; i++) {
        current.true(validation.url(data.valid.url[i]));
    }

    for (let i = 0; i < data.valid.ipaddr.length; i++) {
        current.true(validation.ipaddr(data.valid.ipaddr[i]));
    }
});

test.only('invalid fields are invalid', function (current) {
    for (let i = 0; i < data.invalid.name.length; i++) {
        current.false(validation.name(data.invalid.name[i]));
    }

    for (let i = 0; i < data.invalid.phone.length; i++) {
        current.false(validation.phone(data.invalid.phone[i]));
    }

    for (let i = 0; i < data.invalid.email.length; i++) {
        current.false(validation.email(data.invalid.email[i]));
    }

    for (let i = 0; i < data.invalid.address.length; i++) {
        current.false(validation.address(data.invalid.address[i]));
    }

    for (let i = 0; i < data.invalid.username.length; i++) {
        current.false(validation.username(data.invalid.username[i]));
    }

    for (let i = 0; i < data.invalid.url.length; i++) {
        current.false(validation.url(data.invalid.url[i]));
    }

    for (let i = 0; i < data.invalid.ipaddr.length; i++) {
        current.false(validation.ipaddr(data.invalid.ipaddr[i]));
    }
});