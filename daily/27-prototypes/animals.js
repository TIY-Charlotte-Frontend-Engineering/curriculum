/**
 * Challenge: animals
 * 
 * Create a type called Animal and three subtypes called Bird, Fish, and Mammal. You can
 * only write each of these functions once so think about where you write it.
 * 
 *      living()        should return true for all animals
 *      lifespan(num)   should return true if the animal's lifespan exceeds num years, false otherwise
 *      noise()         should return 'caw caw' for birds, 'blub blub' for fish, and 'neigh' for mammals
 *      greet()         should return something like 'Eagles say caw caw' -- replace species name and noise
 *      
 *  Every species (instance of Bird, Fish, or Mammal) should have a species name and a lifetime.
 *  
 *      let b = new Bird('Eagle', 35); // eagles have a 35 year lifespan
 * 
 *      b.living(); // returns true
 *      b.lifespan(14); // returns true (35 > 14)
 *      b.lifespan(40); // returns false (35 < 40)
 *      b.noise(); // returns 'caw caw'
 *      b.greet(); // returns 'Eagles say caw caw'
 */

function Animal() {
    this.home = 'Earth';

    return this;
}

Animal.prototype.living = function () {
    return true;
}

Animal.prototype.lifespan = function (threshold) {
    if (this.lifetime > threshold) {
        return true;
    } else {
        return false;
    }
}

Animal.prototype.noise = function () {
    return this.sound;
}

Animal.prototype.greet = function () {
    return this.name + ' say ' + this.noise();
}

function Bird(name, lifetime) {
    this.name = name;
    this.lifetime = lifetime;
    this.sound = 'caw caw';

    return this;
}

function Mammal(name, lifetime) {
    this.name = name;
    this.lifetime = lifetime;
    this.sound = 'neigh';

    return this;
}

function Fish(name, lifetime) {
    this.name = name;
    this.lifetime = lifetime;
    this.sound = 'blub blub';

    return this;
}

Fish.prototype = new Animal();
Bird.prototype = new Animal();
Mammal.prototype = new Animal();

let salmon = new Fish('Salmon', 13);
let monkey = new Mammal('Howler Monkey', 15);

console.log(salmon.living());
console.log(monkey.greet());