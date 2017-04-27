module.exports = {
    // Create a property called 'longx' that
    // is set to the 'longx' func below.
    longx: longx,
    guesswho: guesswho,
};

function longx(letters) {
    // 1. create a total variable - count x's in sequence
    // 2. create a max variable - length of longest sequence
    // 3. loop over all letters
    // 4. looking for x's. 
    //      total++ if we find
    //      if its biggest total, save to max, then reset total
    // 5. return max
    let total = 0;
    let max = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'x') {
            total++;
        } else {
            // if statement MUST BE before total = 0
            if (total > max) {
                max = total;
            }

            total = 0;
        }
    }

    // Add this to check the very last run
    if (total > max) {
        max = total;
    }

    return max;
}


function guesswho(ops) { // array of 'operations'
    // 1. create an array of numbers to keep
    // 2. loop over 1 - 100
    // 3. pass each number into each function in `ops`
    // 4. if all trues, push to array. if not, move on.
    let keepers = [];

    for (let num = 1; num <= 100; num++) {
        let valid = true; // if this stays true, push the num

        for (let i = 0; i < ops.length; i++) {
            let success = ops[i](num);
            
            if (!success) {
                valid = false;
            }
        }

        if (valid) {
            keepers.push(num);
        }
    }

    return keepers;
}
