module.exports = {
    map: map,
    filter: filter,
    reduce: reduce,
    find: find,
};

function map(data, func) {
    // create an empty array
    let results = [];

    // for loop over data
    // run every element through the
    //    func and push the result to
    //    the empty array
    for (let i = 0; i < data.length; i++) {
        results.push(func(data[i]));
    }

    // return array
    return results;
}

function filter(arr, func) {
    // create an empty array
    let results = [];

    // loop if func(item) is true, push to array
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            results.push(arr[i]);
        }
    }

    // return array
    return results;
}

function reduce(arr, func, start) {
    // define a starting point
    // loop: 

    for (let i = 0; i < arr.length; i++) {
        start = func(start, arr[i]);
    }

    return start;
}

/* Return one element or undefined */
function find(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}