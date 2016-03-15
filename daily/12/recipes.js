var recipeName = 'Cheese Omelette';
var fridge = ['egg', 'egg', 'green pepper', 'cheese', 'onion', 'peanut butter'];

function organize(items) {
    var result = {};
    // Example of Object.hasOwnProperty():
    //    result.applesauce = 1;
    //    result.hasOwnProperty('applesauce'); // true
    //    result.hasOwnProperty('cheetos'); // false

    for (var i = 0; i < items.length; i++) {
        // ths won't work: result.items[i]
        if (result.hasOwnProperty(items[i])) {
            // Note: this is the special 'array syntax' for objects. We need to use it
            // here because we don't know what the name of our properties are in advance.
            // We normally know this, but here we're building the object from scratch.
            result[items[i]] = result[items[i]] + 1;
        } else {
            result[items[i]] = 1;
        }
    }

    return result;
}

// Confirm that our `organize` function is working as expected. It should be converting
// the `fridge` array into an object.
var organized = organize(fridge);
console.log(organized);

// Check over the list of available foods to see if we can make an
// omelette. If so, take out the ingredients and replace them with
// an omelette.
function omelette(foods) {
    var recipe = {
        egg: 2,
        cheese: 1,
    };

    var available = organize(foods);

    // if we have enough, take out the corresponding amount and add in an omelette
    // if we don't, don't touch the food
    if (available.egg >= recipe.egg && available.cheese >= recipe.cheese) {
        // remove two eggs from `foods`. loop through once per egg that needs to
        // be removed, find the index of the first egg in the list, then cut it
        // out.
        for (var i = 0; i < recipe.egg; i++) {
            var index = foods.indexOf('egg');
            foods.splice(index, 1);
        }
        // remove one cheese from `foods`. same approach as above.
        for (var i = 0; i < recipe.cheese; i++) {
            var index = foods.indexOf('cheese');
            foods.splice(index, 1);
        }

        // add one omelette from `foods`
        foods.push('omelette');
    }


    // returns new list of foods, minus omelette ingredients, plus an omelette
    return foods;
}

console.log('fridge before: ' + fridge);
fridge = omelette(fridge);
console.log('fridge after: ' + fridge);

// example: 
//    fridge = omelette(fridge);
//
//    before: ['egg', 'egg', 'green pepper', 'cheese', 'onion']
//    after: ['green pepper', 'onion', 'omelette']