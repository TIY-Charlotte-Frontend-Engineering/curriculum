// 'Import' a module.
let models = require('./models');
let views = require('./views');
let TrinketRouter = require('./router');

window.addEventListener('load', function () {
    let piggyBank = new models.TrinketModel();

    let homeView = new views.HomeView({
        el: document.querySelector('#home-view'),
        model: piggyBank,
    });

    let buyView = new views.BuyView({
        el: document.querySelector('#buy-view'),
        model: piggyBank,
    });

    let sellView = new views.SellView({
        el: document.querySelector('#sell-view'),
        model: piggyBank,
    });

    // Set up routes
    let router = new TrinketRouter();
    router.on('route:goHome', function () {
        homeView.el.classList.remove('hidden');
        buyView.el.classList.add('hidden');
        sellView.el.classList.add('hidden');
    });

    router.on('route:buyTime', function () {
        homeView.el.classList.add('hidden');
        buyView.el.classList.remove('hidden');
        sellView.el.classList.add('hidden');
    });

    router.on('route:sellTime', function () {
        homeView.el.classList.add('hidden');
        buyView.el.classList.add('hidden');
        sellView.el.classList.remove('hidden');
    });

    // Black magic, mostly.
    Backbone.history.start();

    setInterval(function () {
        let newRate = Math.floor(Math.random() * 100);
        piggyBank.set('rate', newRate);
    }, 2000);
});