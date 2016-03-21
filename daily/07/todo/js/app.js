/*
-- Variables --
var <name> = <value>
    - name must be unique
    - value can be different types, including string, numbers, booleans, objects, etc.

-- Conditionals--
Exist for FLOW CONTROL.
if (<boolean>) {
    <your code>
}

if (<boolean>) {
    <your code if true>
} else {
    <your code if false>
}

-- Built-in API's --
- window and document are part of DOM API
- console is the browser being nice

-- Events --
Triggered when certain things happen (page load, user clicks
button, etc). We can use event handlers to run certain code
when an event occurs.

Events are identified using strings.

-- Functions --
The main tool we have for grouping and naming code.
*/
/*
var headline = document.getElementById('headline');
console.log(headline);
headline.textContent = 'omg js';
*/

window.addEventListener('load', function () {
    // Creating new variables! `total` is a number,
    // and `label` is a string. Both are referred to
    // as variables.
    var total = 7;
    var label = 'woah';
    //    var labelOfTheThing = 'it would work';

    // CONDITIONAL! `if` statements are used to control
    // the flow of programs.
    if (label.length === 5) {
        total = total + 3;
    }

    var headline = document.getElementById('headline');
    headline.textContent = 'omg js';
    //    var item = document.createElement('li');
    //    item.textContent = 'Get grape juice.';

    var gtButton = document.getElementById('gotime');
    //    <element>.addEventListener(string, function);
    gtButton.addEventListener('click', function () {
        //        var source = document.getElementById('thing');
        //        var destination = document.getElementById('headline');

        //        destination.textContent = source.value;
        // Get the element that contains the text we want.
        var source = document.getElementById('thing');

        // Create a new <li> to add to the list.
        var li = document.createElement('li');
        li.textContent = source.value;

        // Add our new <li> to its new parent, `parent`.
        var parent = document.getElementById('things');
        parent.appendChild(li);
    });
});