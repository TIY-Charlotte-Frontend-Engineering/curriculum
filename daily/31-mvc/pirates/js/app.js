
// Best practice: put each view and each model in its own file
let PirateModel = require('./piratemodel'); // constructor
let PirateView = require('./pirateview'); // constructor

/**
 * 1. Rename pirates.html to index.html
 * 2. Run gulp
 * 3. Open index.html in public directory.
 * 4. ALL CHANGES TO FILES GO OUTSIDE OF PUBLIC.
 */

window.addEventListener('load', function () {
    // 1. Create the model
    let pirateStore = new PirateModel();

    // 2. Create the view
    // 3. Tie the model and view together
    let pv = new PirateView({
        el: document.querySelector('section'),  // short for 'element'
        model: pirateStore,                     // pirateStore in this case
    });

    // 4. Profit.
    pv.render(); // display the view when the page loads
});