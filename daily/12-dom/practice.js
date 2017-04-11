/**
 * Write and test a function that counts the number of capitalized letters
 * in a string. Write out input and output types in a comment as well.
 * 
 * Hint: Javascript has a .toUpperCase() and .toLowerCase() function on
 * strings.
 */

// Returns true if a letter can be uppercased, false otherwise.
function uppercaseable(letter) {
    if (letter.toUpperCase() !== letter.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

// Inputs: string (word or phrase)
// Output: number (letter count)
function capitalized(message) {
    let caps = 0; // counter for capitals

    for (let i = 0; i < message.length; i++) {
        // If it's uppercase AND this character actually has an 'uppercase'.
        if (uppercaseable(message[i]) && message[i].toUpperCase() === message[i]) {
            caps++;
        }
    }

    return caps;
}

let hello = capitalized('HellO');
console.log('Should be 2: ' + hello);

let moto = capitalized('HellO $MO.T*O   !');
console.log('Should be 6: ' + moto);