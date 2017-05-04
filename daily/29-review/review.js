/**
 * REVIEW 
 * 
 * Gulp (+ template projects)
 * Modules
 * Prototypes
 * Functional programming 
 * Foundation
 * 
 * PART 1
 * We're going to create a new type of array called a SortedArray that stores all
 * elements in alphabetical order. We're also going to create a Customer type.
 * 
 * SortedArray.push(customer); // adds a customer to the list based on their name
 * SortedArray.get(index); // returns the customer at the specified index
 * 
 * Customers have a name and a title (Mr, Mrs, Sir, Madame, etc).
 */

/* Container for customer data...doesn't really do much atm */
function Customer(title, name) {
    this.title = title;
    this.name = name;

    return this;
}

function SortedArray() {
    /* This is where the actual customers will be stored. We're not doing
        anything special here...the special part is where we push() things */
    this.array = [];

    return this;
}

/** 
 * push should find the place in the array where the customer should go and splice
 * them in there.
 * 
 * you can use > and < to check alphabetical order of strings.
 *      'cat' < 'dog' is true, for example
 * 
 * CHALLENGE
 *  1. Make push insert people in alphabetical order based on the customer's name
 *  2. Modify the example code below to loop over all customers and print out their 
 *      names to make sure they're in alphabetical order.
 */
SortedArray.prototype.push = function (customer) {
    // Observation: the array starts off empty, and all you have to do is add each person
    // in the 'right' place and the array will stay sorted. The goal is to find where
    // customer belongs in the array.

    // Step 1: iterate over all existing customers
    // Step 2: go until we find one that comes later in alphabetical order than the new customer
    // Step 3: if we find it, insert there. if we don't, insert at the end
    for (let i = 0; i < this.array.length; i++) {
        // alex alfonso bag bertha peg sal 
        if (customer.name < this.get(i).name) {
            this.array.splice(i, 0, customer);
            return;
        }
    }

    this.array.push(customer); // add to the end if we get here
};

SortedArray.prototype.get = function (index) {
    // return customer object
    return this.array[index];
};

SortedArray.prototype.length = function () {
    // returns the number of items in the array
    return this.array.length;
}

// let customers = new SortedArray();

// customers.push(new Customer('Lord', 'Sebastian'));
// customers.push(new Customer('Mrs', 'Charlotte'));
// customers.push(new Customer('Mr', 'Freddy'));
// customers.push(new Customer('The Honorable', 'Judge Janet'));

// // console.log(customers.get(0)); // Mrs. Charlotte's object should print

// for (let i = 0; i < customers.length(); i++) {
//     console.log(customers.get(i));
// }

// 1. Move sortedarray into a module
// 2. Use gulp to combine sortedarray and appjs
// 3. use sortedarray in the browser

module.exports = {
    SortedArray: SortedArray,
    Customer: Customer,
};