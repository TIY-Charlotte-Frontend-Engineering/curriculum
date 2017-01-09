/**
 * Library: set of tools for doing something
 *      - currency or date display (currencyjs, moment)
 *      - dom manipulation (jquery)
 *      - functional programming (lodash)
 *      - testing (ava)
 * 
 * Framework: foundation for organizing your app
 *      - Angular
 *      - React
 *      - Vue
 *      - Ember
 *      - Backbone
 */

/**
 * With libraries, you always have trade-offs:
 * 
 * Pros:
 *      - Often a lot faster
 *      - Code usually 'just works'
 *      - When library is updated, you get new stuff too
 * 
 * Cons:
 *      - Loading (often a LOT) more code
 *      - When library has bugs, you have bugs
 */

$(document).ready(function () {
    console.log('test');

    let heading = $('<h1>Testing</h1>').attr('id', 'bigtest').addClass('hide');
    heading.on('click', function () {
        console.log('clicked it');
    });

    $('body').append(heading);
});

// Lodash stuff 

function sayIt(current) {
    console.log('beetlejuice');
}

function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

function addDollar(num) {
    return '$' + num;
}

_.times(3, sayIt);

let nums = _.range(1, 50).filter(isOdd).map(addDollar);


console.log(nums);