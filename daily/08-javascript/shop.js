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

let money = 100;

let item1price = 10;
let item2price = 20;
let item3price = 30;

if (money > item1price * 2) {
    money = money - item1price * 2;
}

if (money >= item2price) {
    money = money - item2price;
}

money = money - 20;
if (money < 30) {
    console.log('getting low');
}
if (money === 30) {
    console.log('lucky winner');
}

console.log(money);