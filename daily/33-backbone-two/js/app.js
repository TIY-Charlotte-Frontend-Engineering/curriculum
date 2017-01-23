// const EventModel = require('./models/event');
const EventList = require('./models/eventlist');
const EventView = require('./views/event');


window.addEventListener('load', function () {
    // const event = new EventModel(); // create an event 
    const list = new EventList();

    // When we create a view, it need to have a this.el and
    // this.model to do its job. This is when we assign those.
    const view = new EventView({
        el: document.querySelector('body'), // one view to rule them all
        model: list,
    });
    view.render();
});