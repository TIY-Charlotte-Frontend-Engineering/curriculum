/**
 * Object prototypes
 * 
 * We started off using every object as a standalone thing.
 * 
 *  let song = {
 *      title: 'My Heart Will Go On',
 *      artist: 'Celine Dion', 
 *  };
 * 
 * Yesterday we talked about constructors, which allow us to create new 'types'. Constructors let us
 * put all logic related to how objects are created in one place.
 * 
 *  let song = new Song('My Heart Will Go On', 'Celine Dion');
 * 
 * Prototypes are the third step and work very well with constructors. Prototypes let us define a set
 * of functions that all instances of a given type will have. Yesterday we made a separate function for
 * each object (traveler.eat(), for example, would be a different function for each traveler); prototypes
 * allow us to share functions across types of objects.
 * 
 *  Built-in examples:
 *      String.prototype.startsWith()
 *      String.prototype.substr()
 *      Array.prototype.indexOf()
 *      Array.prototype.map()
 */

function Food(name, shelf_life) {
    this.name = name;
    this.shelf_life = shelf_life;
    this.expired = false;

    /* This part changes with prototypes */
    // this.expire = function () {
    //     this.expired = true;
    // };

    return this;
}

/** 
 * If a function works the same way on every object, you'll usually want to move it
 * to the prototype.
 */
Food.prototype.expire = function () {
    this.expired = true;
};

Food.prototype.gross = function () {
    if (this.expired || this.name === 'Mushroom') {
        return true;
    } else {
        return false;
    }
};

function CannedFood(name, shelf_life) {
    this.name = name;
    this.shelf_life = shelf_life;

    return this;
}

// CannedFood's can do everything a Food can.
CannedFood.prototype = new Food(); // <== important line

/* Canned foods are never gross. Other foods can be. */
CannedFood.prototype.gross = function () {
    return false;
}

let apple = new Food('Apple', 5);
let ham = new Food('Ham', 2);
let rb = new CannedFood('Refried Beans', 1000);

ham.expire();
rb.expire();

console.log(ham.gross());
console.log(rb.gross());