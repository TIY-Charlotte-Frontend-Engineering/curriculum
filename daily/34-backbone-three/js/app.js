// const EventModel = require('./models/event');
const EventList = require('./models/eventlist');
const CreateEventView = require('./views/create');
const ListEventView = require('./views/list');
const DetailedEventView = require('./views/details');

const AppRouter = require('./router');

window.addEventListener('load', function () {
    // const event = new EventModel(); // create an event 
    const list = new EventList();

    // When we create a view, it need to have a this.el and
    // this.model to do its job. This is when we assign those.
    const createView = new CreateEventView({
        el: document.querySelector('#create-event'),
        model: list,
    });
    // Optional to call here; this is only here because we want
    // it to render on page load. This 'render()' function is the
    // same one we defined in our view.
    createView.render();

    // Calling the createNew function on the collection.
    list.createNew('Toy Soldier Trade Show');
    list.createNew('Dog Walking Competition');
    list.createNew('Pasta Stir-off');

    const listView = new ListEventView({
        el: document.querySelector('#list-events'),
        model: list,
    });
    listView.render();

    const detailedView = new DetailedEventView({
        el: document.querySelector('#details-view'),
        model: list,
    });
    // #lukefail - we don't want to render this now 
    // because we don't have enough info to do it.
    // detailedView.render();
    
    const oldies = new EventList();
    // TODO: create a view that's tied to oldies

    // a and b are wonky names, doing that for 
    // demonstration. please dont name your variables
    // like this in your interview thanks.
    const app = new AppRouter({
        a: listView,
        b: createView,
        c: detailedView,
    });

    // This is another weird backbone thing. Historically, browsers
    // didn't count changes in URL fragments as different 'page visits',
    // so pressing the back button would skip all of them. This fixes
    // that and is pretty important.
    Backbone.history.start();
});