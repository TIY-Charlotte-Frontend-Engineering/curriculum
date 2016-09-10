/**
 * Constructors are a special type of function. You create them
 * like a normal function, but you RUN them with the 'new' keyword.
 * 
 * What does 'new' do?
 * Indicates that the object should return a new object.
 * 
 * You generally create a constructor for each type of thing you need
 * in your app.
 * 
 * Technically, running with 'new':
 *   - Creates a new object as the 'this' property.
 *   - Automatically returns 'this' at the end (gross).
 */
function Food(name, rating) {
    this.name = name;
    this.health = rating;
    // this.rejoice = function () {
        // `this.name` = the 'name' property of the object rejoice()
        // was called on.
        // console.log('Hark! I found a ' + this.name);
    // };

    // What does this return? Oh, 'this'.
    return this;
}

// Create a new property that's going to be shared by ALL FOODS.
// 'Adding to the Food prototype'.
Food.prototype.cookTime = 30;

// 'this' refers to the OBJECT THAT THE FUNCTION WAS CALLED ON.
Food.prototype.eat = function () {
    // console.log('chomp chomp');
    console.log("I'll be eating " + this.name + " in " + this.cookTime + " minutes.");
};

window.addEventListener('load', function () {
    let foods = [];

    let createBtn = document.querySelector('#submit');
    createBtn.addEventListener('click', function () {
        let foodName = document.querySelector('#name').value;
        let foodRating = parseInt(document.querySelector('#health').value);

        // Create a new Food and add it to the food array
        foods.push(new Food(foodName, foodRating));

        // console.log(foods[0]);
        // foods[0].rejoice();
        for (let i = 0; i < foods.length; i++) {
            foods[i].eat();
        }

        document.querySelector('#name').value = '';
        document.querySelector('#health').value = '';
    });
});

// Run the function 'Food' as a constructor.
// let nom = new Food('Peaches', 2);
// let nom = { name: 'Fordham Wallingford', health: 3 };
// console.log(nom);