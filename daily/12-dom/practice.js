
/**
 * Convert a string into title case.
 * 
 * Inputs: one string
 * Output: string
 * 
 * 1. Split sentence into multiple words 
 * 2. Isolate the first letter of each word and capitalize
 * 3. Lowercase the rest
 * 4. Convert array back to a string
 */
function headliner(words) {
    let chunks = words.split(' ');  // chunks is an array

    for (let i = 0; i < chunks.length; i++) {
        // Convert 'were' to 'Were'
        chunks[i] = chunks[i][0].toUpperCase() + chunks[i].slice(1).toLowerCase();
    }

    return chunks.join(' '); // combine the array into a string
}

let hl = headliner('were live in new york city');
console.log(hl);


/* homework review */

