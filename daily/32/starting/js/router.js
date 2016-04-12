var NewCharacterView = require('./views/new-character');
var CharacterModel = require('./models/character');

module.exports = Backbone.Router.extend({
    // things to happen once at the beginning
    initialize: function () {
        this.gameCharacter = new CharacterModel();
    },
    routes: {
        'new': 'newGame',
        'play': 'playGame',
    },

    // when someone visits http://........#/new
    newGame: function () {
        console.log('new game');

        this.banana = new NewCharacterView({
            model: this.gameCharacter,
            el: document.getElementById('new-player-section'),
        });
        this.banana.render();
    },
    // when someone visits http://........#/play
    playGame: function () {
        console.log('play game');
    },
});