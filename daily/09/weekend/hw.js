function map(items, func) {
    return items.map(func);
}

function filter(items, func) {
    return items.filter(func);
}

function reduce(items, func, start) {
    return items.reduce(func, start);
}

function reject(array, func) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i]) === false) {
            output.push(array[i]);
        }
    }
    return output;
}

function find(items, func) {}

function some(items, func) {}

function every(items, func) {}