/**
 * Objects 201
 * 
 * 'this' allows us to reference ourselves.
 */

let person = {
    name: 'Jeb',
    isHealthy: true,
    food: 100,
    eat: function () {
        console.log(this.name + ' is eating');
        this.food = this.food - 10;
    },
    status: function () {
        /* 'this' is the context variable */
        if (this.food < 0) {
            console.log(this.name + ' is sick with ' + this.food + ' food');
        } else {
            console.log(this.name + ' is healthy with ' + this.food + ' food');
        }
    },
};

let second = {
    name: 'Sarah',
    isHealthy: true,
    food: 140,
};

//person.eat();
// 'Jeb is healthy with 100 food'
// 'Jeb is sick with 100 food'
//person.status(); 
let stat = person.status;
/* 'this' refers to the object that the function was called on. */
/*                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^  */
//stat(); 
// second.eat(); // <= will it work?
second.abc = stat;
//second.abc()

//console.log(second);

/** 
 * A constructor is a function with a few special features.
 * 
 * 1. We call it using the 'new' keyword.
 * 2. By convention, constructor names are the only capitalized function names.
 * 3. 'this' is set to a new object -- the thing being constructed.
 * 4. 'return' happens automatically though I find that annoying and confusing
 * 5. The new object's prototype is set to Traveler.prototype (discuss later).
 */
function Traveler(name) {
    this.name = name;
    this.food = 100;
    this.happiness = 60;
    
    this.eat = function () {
        this.food = this.food - 10;
    };
    
    return this; // technically optional (but ew)
}



// create a new 'Traveler' object using a constructor
// populate an array of three travelers
let party = [
    new Traveler('Jeb'),
    new Traveler('Sarah'),
    new Traveler('Paco'),
];

party[2].eat(); // Paco's eat function

console.log(party);

/* 
in oo (object oriented) dev, we want to group 
things based on the object they're related to 

instead of this, add it to the person obj
*/
function eat() { // not today

}
