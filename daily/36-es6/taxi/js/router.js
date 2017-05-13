const Router = require('ampersand-router');

module.exports = Router.extend({
    routes: {
        '': 'startGame',
        'start': 'startGame',
        'play': 'playGame',
        'end': 'endGame',
    },

    startGame() {
        console.log('huck');
        this.views.start.el.classList.add('show');
        this.views.play.el.classList.remove('show');
        this.views.passengers.el.classList.remove('show');
        this.views.end.el.classList.remove('show');
    },

    /* Show two views */
    playGame() {
        this.views.start.el.classList.remove('show');
        this.views.play.el.classList.add('show');
        this.views.passengers.el.classList.add('show');
        this.views.end.el.classList.remove('show');
    },

    endGame() {
        this.views.start.el.classList.remove('show');
        this.views.play.el.classList.remove('show');
        this.views.passengers.el.classList.remove('show');
        this.views.end.el.classList.add('show');
    },
});