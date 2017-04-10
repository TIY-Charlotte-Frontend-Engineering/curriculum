
/**
 * The goal of blackjack is to get as close to 21 points as possible without
 * going over. This function should return TRUE if a given hand of cards is
 * over 21, or FALSE if not.
 * 
 * Point values:
 *  - Number cards: the value of the number
 *  - Face cards: ten points
 *  - Aces: either 1 or 11 (as close to 21 as possible desired)
 */

// Inputs: array of numbers and letters ('cards')
// Output: boolean (over 21 points or not)

function blackjack(cards) {
    // Step 1: find the sum of the array
    let sum = 0;

    for (let i = 0; i < cards.length; i++) {
        // If the current card is a J, Q, or K, convert it from a string
        // into the corresponding number value (10).
        if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
            cards[i] = 10;
        }

        if (cards[i] === 'A') {
            cards[i] = 11; // BUT sometimes this needs to change to 1
        }
    }

    for (let i = 0; i < cards.length; i++) {
        sum = sum + cards[i];
    } 

    // if `sum` is > 21, convert aces to 1
    if (sum > 21) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] === 11) {
                cards[i] = 1;
            }
        }
    }

    sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum = sum + cards[i];
    }

    // return (sum > 21);
    if (sum > 21) {
        return true;
    } else {
        return false;
    }
}

console.log(blackjack([7, 3, 4]) + ' should be false');
console.log(blackjack([7, 3, 4, 8, 8, 9]) + ' should be true');
console.log(blackjack([7, 3, 'Q']) + ' should be false');
console.log(blackjack([7, 4, 'A']) + ' should be false');   // ace is 1
console.log(blackjack([10, 10, 'A']) + ' should be false'); // ace is 1