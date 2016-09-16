// Object literal
let pony = { 
    eyes: 7, 
    horn: 1,
    maneLength: 13,

    wings: 2,

    appear: function () {
        console.log('i am a regal beast');
    },

    poof: function () {
        /* the object that the function was called on */
        console.log('a ' + this.eyes + '-eyed pony appears');
    },
};

let tiger = {
    teeth: 14,
    eyes: 1,
};

let zebra = {
    stripes: 'many',
};

pony.eyes;       // 7
pony.wings      // 1
pony.appear()   // function
pony.poof();

// pony.eyes = pony.eyes - 5;
// console.log(glasses_size);

// let plop = pony.poof;
// plop();

tiger.roar = pony.poof;
zebra.neigh = pony.poof
console.log(zebra.neigh());

// Backbone.Model.extend(5);

// Backbone.Model.extend({
//     initialize: 7,
//     render: 42,
//     events: {

//     }
// });