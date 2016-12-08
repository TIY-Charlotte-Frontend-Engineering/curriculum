console.log('#2: Hangman Lite');

let word = 'salad';
let letter = 'd';
let occurences = 0; // number, used for counting the # of appearances

// 1. Iterate over the word to see if the letter is in the word.
// 2. If the current letter is 'a', add one to occurences.
// 3. Print out 'it exists x times' if occurences > 0
// 4. If occurences === 0, print 'not here'

for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) { // #2
        occurences++;
    }
}

if (occurences === 1) {
    console.log('It exists ' + occurences + ' time');
} else if (occurences > 1) {
    console.log('It exists ' + occurences + ' times');
} else {
    console.log('Nope, not here');
}


console.log('#3: Cherokee Hare');

let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;

// After one week, 200 * .1
// 1. add the solution from ^ to the startingPop 
// 2. Repeat numWeeks times 

let finalPop = startingPopulation;
for (let i = 0; i < numberOfWeeks; i++) {
    finalPop = finalPop + (finalPop * birthRate);
    // finalPop = finalPop * (1 + birthRate);
}

finalPop = Math.floor(finalPop);
console.log('Rabbit horde size: ' + finalPop);

console.log('#4: Change machine');
let amount = 66;
let change = [0, 0, 0, 0];

// [20, 10, 5, 1]

change[0] = Math.floor(amount / 20); // Number of complete 20's we can pull out
amount = amount % 20; // Bills left to provide change for

change[1] = Math.floor(amount / 10);
amount = amount % 10;

change[2] = Math.floor(amount / 5);
amount = amount % 5;

change[3] = amount;