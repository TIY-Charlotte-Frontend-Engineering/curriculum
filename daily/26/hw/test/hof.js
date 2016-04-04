var expect = require('chai').expect;
var hof = require('../hof');

describe('accepting and returning functions', function () {
    it('create an object that returns a next() value', function () {
        var c = hof.counter(2);
        expect(c).to.be.a('object');
        expect(c.next()).to.be.equal(3);

        var d = hof.counter(11);
        d.next();
        d.next();
        expect(d.next()).to.be.equal(14);
    });

    it('multiply two numbers', function () {
        expect(hof.multiply(5)).to.be.a('function');
        expect(hof.multiply(5)(3)).to.be.equal(15);
        expect(hof.multiply(6)(2)).to.be.equal(12);
    });

    it('temporarily apply discounts', function () {
        var tot = hof.total(20);
        expect(tot.discount).to.be.a('function');
        expect(tot.discount(0.20)).to.be.equal(16);
        expect(tot.discount(0.50)).to.be.equal(10);
        expect(tot.discount(1.00)).to.be.equal(0);
    });

    it('user object that validates names', function () {
        var user = hof.user();
        user.setName('Francis Bacon');
        expect(user.getName()).to.be.equal('Francis Bacon');

        expect(user.setName('123 hi')).to.be.equal(false);
        expect(user.getName()).to.be.equal('Francis Bacon');
    });

    it('color generator', function () {
        var color = hof.color(150, 200, 18);
        color.incrRed(12);
        color.incrGreen(30);
        color.incrBlue(-9);

        expect(color.red()).to.be.equal(162);
        expect(color.green()).to.be.equal(230);
        expect(color.blue()).to.be.equal(9);

        color.incrRed(12);
        color.incrGreen(1);
        color.incrBlue(200);

        expect(color.red()).to.be.equal(174);
        expect(color.green()).to.be.equal(231);
        expect(color.blue()).to.be.equal(209);
    });

    it('maintain lives left in a game', function () {
        var lives = hof.lives(5);
        lives.died();

        expect(lives.left()).to.be.equal(4);
        lives.died();
        expect(lives.left()).to.be.equal(3);

        for (var i = 0; i < 10; i++) {
            lives.died(); // you can't decrease below zero
        }
        expect(lives.left()).to.be.equal(0);

        // reset the number of lives to whatever the original
        // value was when lives() was called.
        lives.restart();
        expect(lives.left()).to.be.equal(5);
    });

    it('create a logger function that tracks message counts', function () {
        var logger = hof.messages();
        expect(logger.record('first message')).to.be.equal('[1] first message');
        expect(logger.record('second message')).to.be.equal('[2] second message');
        expect(logger.record('another message')).to.be.equal('[3] another message');
        expect(logger.record('yet another message')).to.be.equal('[4] yet another message');
    });

    it('create a pocket object that can buy and sell stuff', function () {
        var pocket = hof.pocket(50);
        pocket.buy(); // buy for 10 coins
        expect(pocket.coins()).to.be.equal(40);
        expect(pocket.trinkets()).to.be.equal(1);

        pocket.buy();
        expect(pocket.coins()).to.be.equal(30);
        expect(pocket.trinkets()).to.be.equal(2);

        pocket.sell(); // sell for 5 coins
        expect(pocket.coins()).to.be.equal(35);
        expect(pocket.trinkets()).to.be.equal(1);
    });
});