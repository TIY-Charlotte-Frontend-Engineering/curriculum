/**
 * Object-oriented Javascript
 * 
 * 'Object-oriented' is an alternative to the functional paradigm we went 
 * over last week. Object-oriented programming styles put more emphasis on
 * how data is organized (objects) than functional does.
 * 
 * - Mutation is generally OK
 * - Group similar functions and data together into objects
 * - A handful of tools to make objects more powerful exist such as 
 *  constructors, context (this), and prototypes.
 * 
 * Object-oriented style is particularly useful when you're writing software
 * that primarily evolves around discrete units of information, i.e. something
 * humans might define as 'objects' or 'things'.
 *      Examples: bank accounts, restaurant menus, games, CRM
 */

/**
 * Big idea: we use objects for storing information and functions related to
 * that information. That means we make a lot of objects.
 * 
 * 'this' is a keyword that tells us WHICH object a function is operating on.
 */

let me = {
    name: 'Sylvia',
    age: 62,
    birthday: function () {
        this.age++;
    },
};

let friend = {
    name: 'Jane',
    age: 59,
    birthday: function () {
        this.age++;
    },
};

me.birthday();
friend.birthday();

// let fn = me.birthday;
// fn();
friend.celebrate = me.birthday;
friend.celebrate();

console.log(me.age);

/**
 * Public service announcement: VERY EASY TO NOT UNDERSTAND 'THIS'
 * 
 * 'this' is set to the **THE OBJECT THE FUNCTION WAS CALLED ON**
 */

let equation = {
    x: 7,
    y: 10,
};

let operations = {
    add: function () {
        return this.x + this.y;
    },
    sub: function () {
        return this.x - this.y;
    }
};

// Challenge: make it so equation.add() returns 17 and equation.sub() returns -3
equation.add = operations.add;
equation.sub = operations.sub;

console.log(equation.add()); // 17
console.log(equation.sub()); // -3

// Constructors: functions that create a certain type of object
//    Style tip: always capitalize the first letter of a constructor
//    Call a constructor with the 'new' keyword
function Equation(x, y) {
    // The goal of a constructor is to create a new object.
    // By using the 'new' keyword, this function works a bit differently than others:
    //  1. 'this' is set to a new object with no properties
    //  2. the new object's type will be Equation, a subtype of object
    //  3. (gross reality) 'return this' is implied at the end unless you return something else
    this.x = x;
    this.y = y;
    this.add = function () {
        return this.x + this.y;
    };

    return this; // better to be explicit (not technically required)
}

let eq1 = new Equation(1, 8);
console.log(eq1.add()); // this = 'the object the function was called on'

/**
 * After break: friends list 
 * 
 * Friend is a type of thing (so we need a constructor)
 * Each friend has a name and a list of other friends.
 *      - name (string)
 *      - add (function) - pass another friend and they get added to the friends list
 *      - list (function) - 'my name is Luke and i have 11 friends'
 */

function Friend(name) {
    this.name = name; // friends have names now
    // array of friends
    this.friends = [];
    // add function
    this.add = function (newFriend) {
        this.friends.push(newFriend);
        newFriend.friends.push(this);
    };
    // brag function
    this.brag = function () {
        console.log('My name is ' + this.name + ' and I have ' + this.friends.length + ' friend(s)');
    };

    return this;
}

let user = new Friend('Tad');
let neighbor = new Friend('Tabatha');
let cousin = new Friend('Garry');
let mom = new Friend('Felicia');

user.add(mom);
user.brag();    // console.log 'my name is Tad and i have 1 friend'



function XMLHttpRequest() {
    this.open = function(method, url) {
        // ...
    };

    this.send = function () {
        // ...
    };

    this.addEventListener = function (event, func) {
        // ...
    };

    return this;
}

let request = new XMLHttpRequest();
request.open('GET', 'http:......');
request.addEventListener('load', function () {

});
request.send();


// CHALLENGE
// Create two types of objects:
//      - Menu (a bunch of different items)
//      - Item (an individual item / food)
//
// Menu's hold a restaurants name and a list of all the available items.
// Item's hold a name, price, as well as whether the item is vegetarian and gluten-free.
// 
// You should be able to:
//     - Add items to the menu
//     - Call a function on the menu that returns all gluten-free foods
//     - Call a function on the menu that returns all vegetarian foods
//     - Call a function on the menu that returns TRUE if there's a food 
//        with the specified name on the menu ("Do you have saurkraut casserole?" ==> true or false)

// menu.vegetarian(); // return an array of vegetarian foods on the menu

// Step 1: menu and item constructors
function Menu(name) {
    this.name = name;
    this.items = [];

    this.add = function (nom) {
        this.items.push(nom);
    };

    this.glutenFree = function () {
        let foods = [];

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].gf) {
                foods.push(this.items[i]);
            }
        }

        return foods;
    };

    return this;
}

function Item(name, price, gf, veg) {
    this.name = name;
    this.price = price;
    this.gf = gf;
    this.veg = veg;

    return this;
}

let menu = new Menu('The Golden Egg Cafe');

let sandwich = new Item('Egg Salad Sandwich', 4.47, false, true);
let deviled = new Item('Deviled Eggs', 7.99, true, true);

menu.add(sandwich);
menu.add(deviled);

console.log(menu.glutenFree());

// Step 2: add items to menu
// Step 3: (your call)