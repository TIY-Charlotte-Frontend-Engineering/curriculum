let Player = require('./player');   // import player constructor
let Team = require('./team');       // import team constructor

window.addEventListener('load', function () {
    let chaserNames = ['Janet', 'Jeb', 'Jocelyn', 'Jenkins', 'Jobeth'];
    let runnerNames = ['Rodge', 'Rover', 'Rothgar', 'Reggie', 'Rihanna'];

    let c = new Team('chasers');
    let r = new Team('runners');

    for (let i = 0; i < chaserNames.length; i++) {
        let next = new Player(chaserNames[i]);
        c.add(next); // add a player
    }

    for (let i = 0; i < runnerNames.length; i++) {
        let next = new Player(runnerNames[i]);
        r.add(next); // add a player
    }

    console.log(r);
    console.log(c);

    c.won(r);
    r.won(); // or r.won(c)

    // first chaser tags first runner
    // c.roster[0].tag(r.roster[0]); // freeze
    // r.roster[0].tag(c.roster[0]); // nada
    // r.roster[1].tag(r.roster[0]); // unfreeze
    // c.roster[0].tag(r.roster[1]); // freeze
    // c.roster[1].tag(r.roster[2]); // freeze
    // r.roster[2].tag(r.roster[1]); // attempted freeze

});