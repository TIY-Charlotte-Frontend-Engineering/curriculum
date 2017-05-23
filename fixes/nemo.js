/**
 * Nemo lost at sea
 * 
 * nemo(prob, days)
 *      prob = percentage chance of catching a fish
 *      days = number of days before rescue
 */

function nemo(prob, days) {
    // Try it out 1m times and get the success rate
    let successes = 0;
    for (let i = 0; i < 1000000; i++) {
        if (survival(prob, days)) {
            successes++;
        }
    }

    return successes / 1000000;
}

function survival(prob, days) {
    // 1. start with 10 fish
    // 2. loop # of days
    // 3. remove one fish per day, chance of catching a fish
    // 4. if he's out of fish, return false
    // 5. if he makes it to the end, return true
    let fish = 10;

    for (let i = 0; i < days; i++) {
        // Maybe catch a fish
        if (Math.random() < prob) {
            fish++;
        }

        // Always eat a fish
        fish--;

        // If we didn't have one to eat, starve :(
        if (fish < 0) {
            return false;
        }
    }

    return true;
}

console.log(nemo(0.2, 15))
console.log(nemo(0.3, 15))
console.log(nemo(0.8, 30))