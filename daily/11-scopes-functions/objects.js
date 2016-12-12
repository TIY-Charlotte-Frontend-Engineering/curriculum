// let songName = 'My Heart Will Go On';
// let songArtist = 'Celine Dion';
// let songYear = 1996;
// let favorite = true;

// Objects let us combine related information into a single name
// - Arrays have multiple parts, and each is identified by an index
// - Objects have multiple parts, and each is a string
let song = {    // same symbol as blocks ({}) but different meaning
//  property: value,
    name: 'My Heart Will Go On',
    artist: 'Celine Dion',
    year: 1996,
    favorite: true,
};

console.log(song.name); // 'dot notation'
console.log(song.artist);

/**
 * Example: car lot
 */
// This function should return a smallCar (size 1)
function makeSmallCar(paintColor) {
    return { // return an object
        size: 1,
        color: paintColor,
    };
}

// This function should return a largeCar (size 4)
function makeLargeCar(paintColor) {
    return { // return an object
        size: 4,
        color: paintColor,
    };
}

let zippy = makeSmallCar('white');
let drifter = makeSmallCar('green');
let shelby = makeLargeCar('gold');

// let smallCar = { // objects are the one exception where {} are not a code block
//     size: 1,
//     color: 'white',
// };

// let largeCar = {
//     size: 4,
//     color: 'beige',
// };

let lot = {
    cars: [], // lot.cars is an empty array
    capacity: 20,
};

let hugeLot = {
    cars: [],
    capacity: 50,
};

lot.cars.push(zippy);
lot.cars.push(shelby);

// spacesFilled(lot) should give us 5
function spacesFilled(specificLot) {
    // specificLot is our lot object 
    let total = 0;

    for (let i = 0; i < specificLot.cars.length; i++) {
        let car = specificLot.cars[i];
        total = total + car.size; // 'size' is a property of cars
    }

    return total; // return the sum of all the properties
    // return specificLot.cars.length;
}

console.log(spacesFilled(lot)); // should print 5