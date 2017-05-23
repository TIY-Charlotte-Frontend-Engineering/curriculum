/* Find the longest run of x's in a string and return the length. */

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
        }
    }

    return max;
}