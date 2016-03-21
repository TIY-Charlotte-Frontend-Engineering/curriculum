var chai = require('chai');
var expect = chai.expect;
// var expect = require('chai').expect;


function cherokeeHare(simulation) {
    if (typeof (simulation.startingPopulation) !== 'number') {
        return undefined;
    }
    if (simulation.startingPopulation <= 0) {
        return 0;
    }

    var total = simulation.startingPopulation;

    for (var i = 0; i < simulation.numberOfWeeks; i++) {
        total = total + (total * simulation.birthRate);
    }

    return total;
}

// describe(string, function): name to print out, function to run
// it(string, function): name to print out, function to run
describe('Check different startingPopulations', function () {
    it('should work with a positive integer', function () {
        // Here is where we test with a couple of positive integers to make
        // sure that we get the expected response.

        var rabbits = cherokeeHare({
            startingPopulation: 10,
            birthRate: .50,
            numberOfWeeks: 1
        });

        // Set up my expectations.
        expect(rabbits).to.be.a('number');
        expect(rabbits).to.be.equal(15);
    });

    it('should return 0 with a negative integer', function () {
        // Here is where we test with some negative integers to make sure
        // it returns zero.

        var rabbits = cherokeeHare({
            startingPopulation: -70,
            birthRate: .10,
            numberOfWeeks: 2,
        });

        expect(rabbits).to.be.equal(0);
    });

    // Not put in numbers
    it('should only work with numbers', function () {

        var rabbits = cherokeeHare({
            startingPopulation: 'old lettuce',
            birthRate: 1.0,
            numberOfWeeks: 8,
        });

        expect(rabbits).to.be.equal(undefined);
    });

    // Not put in anything
});

describe('Check different numbersOfWeeks', function () {
    // Zero or negative number
    // Decimal number

    it('should return startingPopulation zero or negative case', function () {
        var rabbits = cherokeeHare({
            startingPopulation: 150,
            birthRate: .80,
            numberOfWeeks: -11,
        });

        expect(rabbits).to.be.equal(150);
    });
});