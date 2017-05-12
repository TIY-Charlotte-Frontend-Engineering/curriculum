/**
 * Chair inspector
 * 
 * Set of chairs and each one has a status. We can update
 * the status in a web app and then view all of the statuses.
 * 
 * View #1: overview of each chair, update status
 * View #2: add new chair
 * 
 * - ChairView for displaying a single chair
 * - ChairGroupView for displaying all chairs
 * - AddChairView for adding a new chair
 * 
 * - ChairModel for one chair
 * - ChairCollection for all chairs
 */

window.addEventListener('load', function () {
    let AddChairView = require('./views/addchair');
    let ChairGroupView = require('./views/chairgroup');

    let acv = new AddChairView({
        el: document.querySelector('#view-add-chair'),
    });

    let cgv = new ChairGroupView({
        el: document.querySelector('#view-chair-group'),
    });

    acv.render();
    cgv.render();

    // set up routing
    let AppRouter = require('./router');

    let router = new AppRouter();
    // warning: janky (lets review after lunch)
    router.views = {
        // some descriptive name : the instance of the view
        group: cgv,
        add: acv,
    };

    router.history.start({
        pushState: false,   // i'll look into this
    });
});
