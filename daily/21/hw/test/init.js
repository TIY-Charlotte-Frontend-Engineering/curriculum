var expect = require('chai').expect; // load expect library

describe('Load validation library', function () {
    var validation = require('../validation');

    it('has a name() function', function () {
        expect(validation.hasOwnProperty('name')).to.be.equal(true);
        expect(validation.name).to.be.a('function');
    });

    it('has a phone() function', function () {
        expect(validation.hasOwnProperty('phone')).to.be.equal(true);
        expect(validation.phone).to.be.a('function');
    });

    it('has a email() function', function () {
        expect(validation.hasOwnProperty('email')).to.be.equal(true);
        expect(validation.email).to.be.a('function');
    });

    it('has a address() function', function () {
        expect(validation.hasOwnProperty('address')).to.be.equal(true);
        expect(validation.address).to.be.a('function');
    });

    it('has a username() function', function () {
        expect(validation.hasOwnProperty('username')).to.be.equal(true);
        expect(validation.username).to.be.a('function');
    });

    it('has a url() function', function () {
        expect(validation.hasOwnProperty('url')).to.be.equal(true);
        expect(validation.url).to.be.a('function');
    });

    it('has a ipaddr() function', function () {
        expect(validation.hasOwnProperty('ipaddr')).to.be.equal(true);
        expect(validation.url).to.be.a('function');
    });
});