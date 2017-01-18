// /**
//  * Every object has a prototype.
//  * 
//  * A prototype is the 'parent' object that is shared by all
//  * instances of the child object.
//  * 
//  * Example: if we create a Dog object and add 'bark()' to the 
//  * prototype, all dogs will share the same 'bark()' function.
//  */

// // First, without prototypes
// function Dog(name) {
//     this.name = name;
//     this.bark = function () {
//         console.log(this.name + ' goes bark bark');
//     };

//     // this.eat = function () {
//     //     console.log('eating now');
//     // }

//     return this;
// }

// // Second, move 'bark' and 'eat' to the prototype.
// // 'prototype' is a built-in property of all functions.
// //
// // The prototype of a constructor is shared with all objects 
// // constructed from that prototype.
// Dog.prototype.eat = function () {
//     console.log('eating now');
// };

// /**
//  * Note: it is considered bad practice to modify types that you
//  * did not create.
//  * 
//  * This is because the creators may one day add a 'capitalize' 
//  * function, and that's gonna be really, really confusing.
//  */
// String.prototype.capitalize = function () {
//     let str = this.toString();
//     // console.log(str);
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// };

// window.addEventListener('load', function () {
//     let fido = new Dog('Fido');
//     fido.bark();
//     fido.eat();

//     // console.log(fido.stringcheese())

//     let game = 'NinTENDO SIXTY FOUR';
//     console.log(game.capitalize()); // wont work by default
// });

/* Stuff in common between all buyable things */
function CartItem() {
    return this;
}

CartItem.prototype.displayText = function () {
    return this.show();
};

/* Foods are a type of buyable thing */
function Food(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.show = function () {
        return this.name;
    };

    // secretly happening
    // this.prototype = Food.prototype;
    return this;
}

Food.prototype = CartItem.prototype;

/* Vacations are a type of buyable thing */
function Vacation(destination, price) {
    this.destination = destination;
    this.price = price;

    this.show = function () {
        return 'Trip to ' + this.destination;
    };

    return this;
}

Vacation.prototype = CartItem.prototype;

window.addEventListener('load', function () {
    let snack = new Food('Old toast', 15.99, 2);
    let trip = new Vacation('South Africa', 1400.00);

    console.log(snack.price);

    let cart = [];
    cart.push(snack);
    cart.push(trip);

    for (let i = 0; i < cart.length; i++) {
        console.log('the text that should show up');
        // implication: every cart item should have a displayText() property
        console.log(cart[i].displayText());
    }
});