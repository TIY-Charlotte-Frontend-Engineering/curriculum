function getPuzzle() {
    let request = new XMLHttpRequest(); // 'new ajax request'
    request.open('GET', 'https://puzzlegram.herokuapp.com/fortune');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log(response);

        // Where we keep the results of our operations.
        let outputs = [];

        // Loop through all of the operations and solve them. We
        // need to do this after the response comes back because
        // we don't know the operations we need until then.
        for (let i = 0; i < response.letters.length; i++) {
            let op = response.letters[i].operation;

            if (op === 'fraction') {
                let num = response.letters[i].inputs[0];
                let den = response.letters[i].inputs[1];

                let letter = String.fromCharCode(fraction(num, den));
                outputs.push(letter);
            } else if (op === 'divisible') {
                // run the function 'divisible' with the input arrays
                // take the return value and convert it into a character
                // push it real good
                let all = response.letters[i].inputs[0];
                let divisors = response.letters[i].inputs[1];

                let letter = String.fromCharCode(divisible(all, divisors));
                outputs.push(letter);
            } else {
                outputs.push('?');
                console.log('WHO KNOWS?');
            }
        }

        console.log(outputs.join(''));
    });
    request.send();
}

// What to do at the beginning
window.addEventListener('load', function () {
    getPuzzle();
});

function fraction(num, den) {
    let upper = 0;
    // Starting point for gcd
    if (num < den) {
        upper = num;
    } else {
        upper = den;
    }

    // i is the 'current gcd'
    for (let gcd = upper; gcd > 1; gcd--) {
        if (num % gcd === 0 && den % gcd === 0) {
            return den / gcd;
        }
    }

    return den;
}

function divisible(complete, partial) {
    let sum = 0;

    for (let i = 0; i < complete.length; i++) {
        // Each item of complete

        // If complete[i] is divisible by all numbers in partial,
        // add it to sum.
        let addIt = true;

        for (let j = 0; j < partial.length; j++) {
            // Each item of partial
            if (complete[i] % partial[j] !== 0) {
                addIt = false;
            }
        }

        // If we want to add it, doooo ittttt.
        if (addIt) {
            sum = sum + complete[i];
        }
    }

    return sum;
}