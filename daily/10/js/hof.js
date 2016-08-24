/**
 * Transform things.
 * 
 * Higher order functions: functions that accept other functions
 * as inputs or produce them as outputs.
 */

function rock(item) {
    console.log('good day, ' + item);
    console.log(item(4));
}

function paper(a) {
    return a * a;
}

rock(paper);

// things is an array of numbers
// doIt is a function
function transform(things, doIt) {
    let outputs = [];

    for (let i = 0; i < things.length; i++) {
        // meta alert
        let result = doIt(things[i]);
        outputs.push(result);
    }

    return outputs;
}

let items = [5, 11, 7, 2];

function getOuttaHere(num) {
    return num - 3;
}

let results = transform(items, getOuttaHere);
console.log('input items:');
console.log(items);
console.log('output items:');
console.log(results);