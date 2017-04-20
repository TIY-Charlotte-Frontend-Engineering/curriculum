/**
 * PRACTICE PROBLEM
 * 
 * We're writing a function for a power company that needs to figure out how
 * much money to charge its customers. The power company keeps track of when
 * their customers turn lights on and off, and charge $1 for every hour that
 * they're left on.
 * 
 * They record their records using three symbols: 
 *      0 (turned lights off)
 *      1 (turned lights on)
 *      - (didn't change)
 * 
 * Write a function that accepts a string as a parameter that includes a series
 * of these characters, each representing one hour.
 * 
 * Example: 
 *      power("1---0-1-")   returns 6
 *      power("1-0")        returns 2
 *      power("101-0")      returns 3
 */

function power(usage) {
    let bill = 0;
    let lightsOn = false;

    for (let i = 0; i < usage.length; i++) {
        if (usage[i] === "1") {
            lightsOn = true;
        } else if (usage[i] === "0") {
            lightsOn = false;
        }

        if (lightsOn === true) {
            bill++;
        }
    }

    return bill;
}

console.log(power("1---0-1-"));
console.log(power("1-0"));
console.log(power("101-0"));