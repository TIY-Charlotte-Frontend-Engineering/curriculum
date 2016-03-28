var expect = require('chai').expect;
var validation = require('../validation');
var data = require('../data');

describe('Expected patterns pass', function () {
    // Check valid names.
    it('valid names pass', function () {
        for (var i = 0; i < data.valid.name.length; i++) {
            expect(validation.name(data.valid.name[i])).to.be.equal(true);
        }
    });

    // Check valid phone numbers.
    it('valid phone numbers pass', function () {
        for (var i = 0; i < data.valid.phone.length; i++) {
            expect(validation.phone(data.valid.phone[i])).to.be.equal(true);
        }
    });

    // Check valid email addresses.
    it('valid email addresses pass', function () {
        for (var i = 0; i < data.valid.email.length; i++) {
            expect(validation.email(data.valid.email[i])).to.be.equal(true);
        }
    });

    // Check valid street addresses.
    it('valid street addresses pass', function () {
        for (var i = 0; i < data.valid.address.length; i++) {
            expect(validation.address(data.valid.address[i])).to.be.equal(true);
        }
    });

    // Check valid usernames.
    it('valid usernames pass', function () {
        for (var i = 0; i < data.valid.username.length; i++) {
            expect(validation.username(data.valid.username[i])).to.be.equal(true);
        }
    });

    // Check valid IP addresses.
    it('valid IP addresses pass', function () {
        for (var i = 0; i < data.valid.ipaddr.length; i++) {
            expect(validation.ipaddr(data.valid.ipaddr[i])).to.be.equal(true);
        }
    });

    // Check valid URL's.
    it('valid URL\'s pass', function () {
        for (var i = 0; i < data.valid.url.length; i++) {
            expect(validation.url(data.valid.url[i])).to.be.equal(true);
        }
    });
});