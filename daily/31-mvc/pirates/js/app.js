
/**
 * 1. Rename pirates.html to index.html
 * 2. Run gulp
 * 3. Open index.html in public directory.
 * 4. ALL CHANGES TO FILES GO OUTSIDE OF PUBLIC.
 */

window.addEventListener('load', function () {
    // Best practice: put each view and each model in its own file
    let PirateModel = require('./piratemodel'); // constructor
    let PirateView = require('./pirateview'); // constructor

    // 1. Create the model
    let pirateStore = new PirateModel();
    pirateStore.parrots = 3;        // changing the model
    pirateStore.doubloons = 20;     // changing the model
    pirateStore.pigeons = 44;       // changing the model

    // 2. Create the view
    // 3. Tie the model and view together
    let pv = new PirateView({
        el: document.querySelector('section'),  // short for 'element'
        model: pirateStore,                     // pirateStore in this case
    });

    // 4. Profit.
    pv.render(); // display the view when the page loads

    // Eventually we're going to move these into the view; for now
    // we'll keep them here.
    let buyBtn = document.querySelector('#buy-parrot');
    let sellBtn = document.querySelector('#sell-parrot');

    // Q: what does the buy button need to do?
    buyBtn.addEventListener('click', function () {
        pirateStore.parrots = pirateStore.parrots + 1;
        pirateStore.doubloons = pirateStore.doubloons - 5;
    });

    sellBtn.addEventListener('click', function () {
        pirateStore.parrots -= 1;
        pirateStore.doubloons += 5;
    });
});