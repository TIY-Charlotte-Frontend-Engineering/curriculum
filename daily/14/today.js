// Create a new object using literal notation (create
// explicitly each time).
function makeNormalCar(make, model) {
    var notTheRealName = {};
    notTheRealName.make = make;
    notTheRealName.model = model;
    notTheRealName.size = 1;
    /*    return {
            make: make,
            model: model,
            size: 1,
        };
        */
    return notTheRealName;
}

// A NormalCar 'constructor'. A constructor is a function
// that's used to create new objects. You run constructors
// using the `new` keyword, and when that happens 'this'
// is set to a brand spankin' new object.
//
// By convention, constructors have capitalized names.
function NormalCar(make, model) {
    // Automatically creates 'this' which is what we
    // should craft into a "NormalCar".
    this.make = make;
    this.model = model;
    this.size = 1;

    // Strangely optional.
    return this;
}

var clunker = makeNormalCar('Honda', 'Civic');
// Run the NormalCar function as a 'constructor'
var clunker = new NormalCar('Honda', 'Civic');

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

function FoodItem(name, price) {
    var food = {};
    food.name = name;
    food.price = price;

    return food;
}

function ShoppingCart(space) {
    this.space = space;
    this.wheels = 4;

    return this;
}

ShoppingCart.prototype.loadUp = function (item) {
    return 5;
};

var salsa = new FoodItem('salsa', 4.41);
console.log(salsa);
var dogfood = new FoodItem('dog food', 18.08);

var cart = new ShoppingCart(20);
console.log(cart.toString());