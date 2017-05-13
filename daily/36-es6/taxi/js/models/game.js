const State = require('ampersand-state');

const MAX_X = 20;
const MAX_Y = 20;

function random() {
    return Math.floor(Math.random() * 20);
}

module.exports = State.extend({
    /* Create a new passenger when the game starts. */
    initialize() {
        this.nextPassenger();
    },

    props: {
        gas: 'number',
        money: 'number',
        car_gas_loss: 'number',
        car_fare_amt: 'number',

        car_x: 'number',
        car_y: 'number',

        pass_x: 'number',
        pass_y: 'number',

        dest_x: 'number',
        dest_y: 'number',

        // whether the passenger is waiting or has already been picked up
        passenger_waiting: 'boolean',
    },

    /* Increase our $$ and create a new passenger. */
    pickUp() {
        this.money += this.car_fare_amt;
        this.nextPassenger();
    },

    nextPassenger() {
        this.pass_x = random();
        this.pass_y = random();

        this.dest_x = random();
        this.dest_y = random();

        this.passenger_waiting = true;
    },

    moveUp() {
        if (this.car_y - 1 >= 0) {
            this.car_y -= 1;
            this.checkMove();
        }
    },
    moveRight() {
        if (this.car_x + 1 <= MAX_X) {
            this.car_x += 1;
            this.checkMove();
        }
    },
    moveDown() {
        if (this.car_y + 1 <= MAX_Y) {
            this.car_y += 1;
            this.checkMove();
        }
    },
    moveLeft() {
        if (this.car_x - 1 >= 0) {
            this.car_x -= 1;
            this.checkMove();
        }
    },

    /* Do all the things all successful moves require */
    checkMove() {
        this.gas -= this.car_gas_loss;
    },
});