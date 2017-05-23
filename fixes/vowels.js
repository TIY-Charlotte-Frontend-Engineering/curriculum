

function removeVowels(sentence) {

    let letters = [];

    for (let i = 0; i < sentence.length; i++) {
  
        if (sentence[i].toLowerCase() !== 'a' && 
            sentence[i].toLowerCase() !== 'e' &&
            sentence[i].toLowerCase() !== 'i' &&
            sentence[i].toLowerCase() !== 'o' && 
            sentence[i].toLowerCase() !== 'u') {

            letters.push(sentence[i]);
        }
    }

    return letters.join('');
}

console.log(removeVowels('What does this even mean?'));
console.log(removeVowels('Another line, another sentence'));