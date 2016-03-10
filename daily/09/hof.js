var costs = [4.99, 1.99, 7.54, 3.69];

/**
 * Create this function for our `filter` below. We want to filter
 * out all items that are larger than five.
 */
function greaterThanFive(current) {
    return current > 5;
}

/**
 * Create this function for our `map` below. 
 */
function surgePrice(cost) {
    return cost * 1.10;
}

function total(running, next) {
    console.log(running + ' ' + next);
    return running + next;
}

/*
function filter(values, operation) {
    var keepers = [];
    for (var i = 0; i < values.length; i++) {
        if (operation(values[i])) {
            keepers.push(values[i]);
        }
    }

    return keepers;
}

filter(costs, greaterThanFive);
*/

// Get items that cost more than $5
var expensive = costs.filter(greaterThanFive);
console.log(expensive);

console.log('before: ' + costs);
var surge = costs.map(surgePrice);
//
var sum = costs.map(function (num) {
    return num * 1.10;
});
//
console.log('after: ' + surge);

console.log('lets run this');
var grandTotal = costs.reduce(total, 0);
console.log('grand total: ' + grandTotal);


/*
 PATTERNS
 
 Modifying
 Changing each element using some formula.
    - map(<function>)
 
 Filtering
 Keeping some stuff, dropping others.
    - filter(<function>)
 
 Aggregation
 Combining a list into a single value.
    - reduce(<function>, starting_value)
*/