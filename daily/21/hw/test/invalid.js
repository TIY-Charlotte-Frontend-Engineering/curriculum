var expect = require('chai').expect;
var validation = require('../validation');
var data = require('../data');

describe('Expected patterns fail', function () {
    // Check valid names.
    it('valid names pass', function () {
        for (var i = 0; i < data.invalid.name.length; i++) {
            expect(validation(data.invalid.name[i])).to.be.equal(false);

        };
    });

    // Check valid phone numbers.
    it('valid phone numbers pass', function () {
        for (var i = 0; i < data.invalid.phone.length; i++) {
            expect(validation(data.invalid.phone[i])).to.be.equal(false);

        };
    });

    // Check valid email addresses.
    it('valid email addresses pass', function () {
        for (var i = 0; i < data.invalid.email.length; i++) {
            expect(validation(data.invalid.email[i])).to.be.equal(false);

        };
    });

    // Check valid street addresses.
    it('valid street addresses pass', function () {
        for (var i = 0; i < data.invalid.address.length; i++) {
            expect(validation(data.invalid.address[i])).to.be.equal(false);
        };
    });

    // Check valid usernames.
    it('valid usernames pass', function () {
        for (var i = 0; i < data.invalid.username.length; i++) {
            expect(validation(data.invalid.username[i])).to.be.equal(false);

        };
    });

    // Check valid IP addresses.
    it('valid IP addresses pass', function () {
        for (var i = 0; i < data.invalid.ipaddr.length; i++) {
            expect(validation(data.invalid.ipaddr[i])).to.be.equal(false);

        };
    });

    // Check valid URL's.
    it('valid URL\'s pass', function () {
        for (var i = 0; i < data.invalid.url.length; i++) {
            expect(validation(data.invalid.url[i])).to.be.equal(false);

        };
    });
});