window.addEventListener('load', function () {
    var Router = require('./router');
    console.log(Router);

    var router = new Router();
    Backbone.history.start();
});