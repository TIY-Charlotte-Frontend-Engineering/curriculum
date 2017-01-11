/**
 * Closures and IIFE's 
 * Two very common ways to use scopes in JS. Closures are one of the most revered
 * features of the JS language.
 * 
 * Closure: preserving a function's scope after the function finishes executing
 *      ^^^^ whaaaaaaaat?
 * IIFE: 'immediately invoked function expression'
 */

function makeABank() {
    let balance = 0;
    let active = true;

    return {
        money: balance,
    };
}

/* QUESTION: what is the value of bank.money? */
let bank = makeABank();

bank.money = 100;
// balance = 10; // doesn't work (balance isn't defined)
// console.log(bank.money);

// window.addEventListener('load', function () {
//     let textbox = document.querySelector('#name');

//     textbox.addEventListener('keyup', function () {
//         // validation stuff
//         if (textbox.value === 'Luke') {
//             console.log('access granted');
//         } else {
//             console.log('access denied');
//         }
//     });
// });

function makeVendingMachine() {
    let money = 100;
    let foods = ['pepsi', 'chips', 'old pancakes'];

    /**
     * Principle here: least privilege
     * Don't give users or code more access to information than they need.
     */
    return {
        buy: function () {
            if (foods.length > 0) {
                money = money + 1.25;
                let food = foods.pop(); // remove an item from the vending machine

                console.log('got ' + food + '; machine has $' + money);
            } else {
                console.log('sorry, no food available. need to restock');
            }
        },
        restock: function () {
            foods.push('chicken salad');
            foods.push('tuna');
            foods.push('more old pancakes');

            console.log(foods);
        },
    };
}

let vm = makeVendingMachine();
vm.buy();
vm.buy();
vm.buy();
vm.buy();
vm.buy();
vm.restock();