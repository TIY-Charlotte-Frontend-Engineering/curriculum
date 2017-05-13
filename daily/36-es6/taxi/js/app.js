
window.addEventListener('load', function () {
    /* Import all the things */
    const StartView = require('./views/start');
    const PlayView = require('./views/play');
    const PassengersView = require('./views/passengers');
    const EndView = require('./views/end');

    const GameModel = require('./models/game');
    const PassengerList = require('./models/passengers');

    const GameRouter = require('./router');

    const game = new GameModel({
        car_x: 0,
        car_y: 0,
        gas: 20,
        money: 0,
    });

    const passengers = new PassengerList();
    passengers.createPassenger();

    /**
     * Changes in the model are going to affect the collection; in particular, whenever we
     * pick someone up we wanna change their status or when we drop them off we want to 
     * change their status and create a new person.
     */
    game.on('change', function () {
        // Picking up the passenger
        if (passengers.status() === 'waiting' && game.car_x === game.pass_x && game.car_y === game.pass_y) {
            passengers.pickUp();
            game.passenger_waiting = false;
        }

        // Drop them off and collect the fare.
        if (passengers.status() === 'picked_up' && game.car_x === game.dest_x && game.car_y === game.dest_y) {
            passengers.dropOff();
            game.pickUp();
        }
    });

    const sv = new StartView({
        el: document.querySelector('section#view-start'),
        model: game,
    });

    const pv = new PlayView({
        el: document.querySelector('section#view-play'),
        model: game,
    });

    const plv = new PassengersView({
        el: document.querySelector('section#view-passengers'),
        collection: passengers,
    });

    const ev = new EndView({
        el: document.querySelector('section#view-end'),
        model: game,
    });

    sv.render();
    pv.render();
    plv.render();
    ev.render();

    /* Routing logic */
    const router = new GameRouter();
    router.views = {
        start: sv,
        play: pv,
        passengers: plv,
        end: ev,
    };

    sv.router = router;
    pv.router = router;
    plv.router = router;
    ev.router = router;

    router.history.start({
        pushState: false,
    });
});