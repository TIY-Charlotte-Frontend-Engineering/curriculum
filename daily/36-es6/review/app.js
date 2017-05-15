
window.addEventListener('click', function () {
    let PassengerModel = require('./models/passenger');
    let PassengerList = require('./models/passengers');
    let GameModel = require('./models/game');

    let passengers = new PassengerList();
    let game = new GameModel();

    // views go here

    // We can check if we're @ a passenger when we click, or when the model changes.
    game.on('change', function () {
        if (game.taxi_x === game.passenger_x && game.taxi_y === game.passenger_y) {
            // ???
            passengers.updateLatest('in buggy');
            passengers.addRandom();
            game.fare += 20;
        }
    });
}); 