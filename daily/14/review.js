function makeNormalCar(make, model) {
    return {
        make: make,
        model: model,
        size: 1,
    };
}

function makeHugeCar(make, model) {
    return {
        make: make,
        model: model,
        size: 2,
    };
}

function makeGarage(lotSize) {
    return {
        cars: [],
        // Park a car if there's enough space.
        //   Return true if the car was parked.
        //   Return false if the car wasn't parked.
        park: function (vehicle) {
            // How much space is available?
            var available = this.availableSpaces();
            console.log(available + ' spaces available');

            // How big is the car we want to put in?
            // Put it in there if it fits.
            if (vehicle.size <= available) {
                this.cars.push(vehicle);
                console.log('Parked. Now we\'ve got fewer spaces.');
                return true;
            } else {
                return false;
            }
        },
        availableSpaces: function () {
            var available = lotSize;
            for (var i = 0; i < this.cars.length; i++) {
                available = available - this.cars[i].size;
                //                available = available - this.cars.size[i];              
            }

            return available;
        },
        // Compares lotSize to number of available spaces.
        // Is it full? true or false
        full: function () {
            // Get available spaces
            var available = this.availableSpaces();
            if (available === lotSize) {
                return true;
            } else {
                return false;
            }

            //            return available === lotSize;
        },
    };
}

var clunker = makeNormalCar('Chevy', 'Desperado');
var speedDemon = makeHugeCar('Honda', 'Civic');

console.log(clunker);
console.log(speedDemon);

var garage = makeGarage(25);

garage.park(speedDemon);
garage.park(clunker);

console.log(garage.full()); // false