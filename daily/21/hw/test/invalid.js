var expect = require('chai').expect;
var validation = require('../validation');
var data = require('../data');

describe('Expected patterns fail', function () {
    // Check valid names.
    it('invalid names fail', function () {
        for (var i = 0; i < data.invalid.name.length; i++) {
            expect(validation.name(data.invalid.name[i])).to.be.equal(false);

        }
    });

    // Check valid phone numbers.
    it('invalid phone numbers fail', function () {
        for (var i = 0; i < data.invalid.phone.length; i++) {
            expect(validation.phone(data.invalid.phone[i])).to.be.equal(false);

        }
    });

    // Check valid email addresses.
    it('invalid email addresses fail', function () {
        for (var i = 0; i < data.invalid.email.length; i++) {
            expect(validation.email(data.invalid.email[i])).to.be.equal(false);

        }
    });

    // Check valid street addresses.
    it('invalid street addresses fail', function () {
        for (var i = 0; i < data.invalid.address.length; i++) {
            expect(validation.address(data.invalid.address[i])).to.be.equal(false);
        }
    });

    // Check valid usernames.
    it('invalid usernames fail', function () {
        for (var i = 0; i < data.invalid.username.length; i++) {
            expect(validation.username(data.invalid.username[i])).to.be.equal(false);

        }
    });

    // Check valid IP addresses.
    it('invalid IP addresses fail', function () {
        for (var i = 0; i < data.invalid.ipaddr.length; i++) {
            expect(validation.ipaddr(data.invalid.ipaddr[i])).to.be.equal(false);

        }
    });

    // Check valid URL's.
    it('invalid URL\'s fail', function () {
        for (var i = 0; i < data.invalid.url.length; i++) {
            expect(validation.url(data.invalid.url[i])).to.be.equal(false);

        }
    });
});