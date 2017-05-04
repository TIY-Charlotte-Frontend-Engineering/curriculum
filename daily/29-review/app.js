// Import a module
let library = require('./review');

let customers = new library.SortedArray();

customers.push(new library.Customer('Lord', 'Sebastian'));
customers.push(new library.Customer('Mrs', 'Charlotte'));
customers.push(new library.Customer('Mr', 'Freddy'));
customers.push(new library.Customer('The Honorable', 'Judge Janet'));

// console.log(customers.get(0)); // Mrs. Charlotte's object should print

for (let i = 0; i < customers.length(); i++) {
    console.log(customers.get(i));
}