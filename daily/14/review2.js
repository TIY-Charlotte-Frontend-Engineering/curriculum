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
        occupied: 0,
        // Park a car if there's enough space.
        //   Return true if the car was parked.
        //   Return false if the car wasn't parked.
        park: function (vehicle) {
            // Does the vehicle fit given the remaining space?
            if (vehicle.size < lotSize - this.occupied) {
                this.occupied = this.occupied + vehicle.size;
                // this.occupied += vehicle.size;
                return true;
            } else {
                return false;
            }
        },
        // Compares lotSize to number of available spaces.
        // Is it full? true or false
        full: function () {
            if (lotSize === this.occupied) {
                return true;
            } else {
                return false;
            }

            // OR return (lotSize === this.parkSpace)
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