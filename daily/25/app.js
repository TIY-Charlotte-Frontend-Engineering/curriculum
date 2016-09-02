function bopIt(words) {
    console.log('List has ' + words.length + ' words.');
    console.log(words);
}

// Delete all the words with the letter 'x'
// Return an array that doesn't have words with that letter 
function removeWithLetter(letter) {
    return all_words.filter(function (word) {
        // Does this word contain
        return (word.split('').indexOf(letter) === -1);
    });
}

window.addEventListener('load', function () {
    bopIt(all_words);

    let lengthBtn = document.querySelector('#length-setter');
    let guessBtn = document.querySelector('#guess-time');

    lengthBtn.addEventListener('click', function () {
        let targetLength = parseInt(document.querySelector('#word-length').value);

        // Reduce to length targetLength
        console.log('setting length to ' + targetLength);
        all_words = all_words.filter(function (word) {
            return (word.length === targetLength);
        });

        bopIt(all_words);
    });

    guessBtn.addEventListener('click', function () {
       // if its safe to delete all words with letter, do it ('wrong')
       if (removeWithLetter('b').length > 0) {
           console.log('nope! none of those here');

           // all_words needs to lose all the words with the letter 'b'
           // Remove a life, add to guesses list, clean out the box
       } else {
           console.log('doh you got one right');
           // populate the letter they guessed
           // pick a word at random, eliminate words that don't match the pattern
       }
       // if that leaves us with no words, reveal letter(s) instead  ('right')
    });

    // Get rid of all words with the letter 'x'

    // Get rid of all words that don't have the letter 'x' in a certain position
});