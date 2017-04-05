/* Programming takes patience. */

/*
    Javascript is a 'general purpose programming language,' meaning
    it can be used to program anything that computers are able
    to program.

    JS's origins are in the browser (the only language where that's true) and
    it is the only general purpose language that runs in all major browsers.

    This means Javascript is influenced by the things people do in web browsers,
    and tends to try to make them easier than they would be.
        - Example: 'events' are a key concept in javascript, which are when
        users do things like clicking buttons, scrolling the page, etc.
*/

/* Variable: a named container for data */
let coins = 5;
let children = 2;

let coinsPerChild = coins / children;

/* Every variable has a 'type', which influences what you can do with it */
let name = 'Joan';

/* + with numbers is called 'addition', with strings its 'concatenation' */
console.log(name + ' has ' + coins + ' coins');

/* 
    Conditional statement 
        - always have an if 
        - optionally have an else
*/
if (coins > 8) {
    console.log(name + ' has enough coins');
} else {
    console.log('Sorry ' + name + ', not enough coins');
}

console.log('end');

let price = 8;
/*
    =       => 'set something equal to' (statement)
    ===     => 'is something equal to?' (question)
    >       => greater than
    <       => less than 
    >=      => greater than or equal to 
    !==     => not equal to

    number + number     =>  number 
    string + string     =>  string
    number - number     =>  number
    string - string     => (error)
*/
let hasEnough = coins === price;


