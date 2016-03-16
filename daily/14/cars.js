// [ NormalCar ] ==> [ Object ] ==> null
function NormalCar(make, model) {
    this.make = make;
    this.model = model;
    this.size = 1;
    this.wheels = 4;

    return this;
}

function HugeCar(make, model) {
    this.make = make;
    this.model = model;
    this.size = 2;
    this.wheels = 4;

    return this;
}

function Vehicle() {
    this.windows = 'glass';
    return this;
}

Vehicle.prototype.drive = function () {
    console.log('boom boom');
};

//var boss = new Vehicle();
NormalCar.prototype = Vehicle.prototype;
HugeCar.prototype = Vehicle.prototype;

/*
HugeCar.prototype.drive = function () {
    console.log('vroom vroom');
};
*/

var out = {
    first: 1,
};
out.first = 2;

var civic = new NormalCar('Honda', 'Civic');
var prius = new NormalCar('Toyota', 'Prius');
var suburban = new HugeCar('Chevrolet', 'Suburban');

civic.drive();
suburban.drive();
// civic.wheels = 3;
// console.log(civic);
// console.log(civic.wheels);
// console.log(prius.wheels);
// console.log(civic.drive());
// console.log(prius);