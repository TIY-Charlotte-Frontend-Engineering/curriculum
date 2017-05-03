
// Something's weird about this code:
/*
window.addEventListener('load', function () {
    let x = 0;

    let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        // x should have gone away once the window load function
        // started running. it did not - it'll still exist.
        //
        // using x in this way is called a 'closure', which makes
        // the value exist beyond its normal lifetime (based on
        // its scope).
        x++;
        console.log(x);
    });
});
*/

// Question: what happens when we click the button?
/*
function add(x, y) {
    return x + y;
}

add(5, 7);
console.log(x); // undefined because x and y only exist as long as
                // the function they're in is running
*/
// Question: what logs out here?

/**
 * Closures allow us to preserve values in local scopes beyond the
 * lifetime of that scope. 
 * 
 * For example, we can keep information like a player's coordinates 
 * outside of the global scope (by putting them in window load) but 
 * have them live for the entire program, not just the lifetime of 
 * the window load function.
 * 
 * The most powerful application of closures is that they allow us
 * to HIDE INFORMATION from other parts of our program. We'll talk
 * about that more later.
 */

function makeBank() {
    // This variable exists but is unreferenceable (there's no name to
    // refer to it by in the outside world). The object we're returning
    // is limiting the ways we can change the balance.
    let balance = 100;

    return {
        add: function (num) {
            if (num > 0) {
                balance = balance + num;
            }
        },
        total: function () {
            return balance;
        }
    };
}

let bank = makeBank();
bank.add(20);
// console.log(bank.total()); // what prints? 120
// console.log(bank.balance); // what prints? undefined


// We're on a pirate ship.
// Trade doubloons (gold coins) for parrots.
// Exchange rate: 4 doubloons = 1 parrot


////////// first version ////////////
let ship = {
    doubloons: 20,
    parrots: 6,
};

function buyParrot(s) {
    s.doubloons = s.doubloons - 4;
    s.parrots = s.parrots + 1;
}

//////////// second version /////////////
function marketplace() {
    let doubloons = 20;
    let parrots = 6;

    return {
        buyParrot: function () {
            doubloons = doubloons - 4;
            parrots = parrots + 1;
        },
        sellParrot: function () {
            doubloons = doubloons + 4;
            parrots = parrots - 1;
        },
        getParrots: function () {
            return parrots;
        },
        getDoubloons: function () {
            return doubloons;
        },
    };
}

let market = marketplace(); // q: what type is market?
market.buyParrot();
console.log(market.getParrots());
console.log(market.getDoubloons());
// buyParrot(ship);
// ship.parrots = 100;
// console.log(ship);

function counter() {
    let num = 0;

    return function () {
        // console.log(num);
        // num++;
        console.log('hello');
    };
}

let next = counter();
next();     // 0
next();     // 1
next();     // 2

let next2 = counter();
next2();    // 0
next2();
next();