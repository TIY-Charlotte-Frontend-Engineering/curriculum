//var firebase = require('firebase');
// global: scope a
window.addEventListener('load', function () { // scope b
    //    var firebase = require('firebase2');

    function result(x, y) { // scope c
        return x * y;
    }

    title = document.getElementById('title'); // don't!!!!!!!
    title.addEventListener('click', function () { // scope d
        console.log('clicked on #' + title.getAttribute('id'));
        console.log(result(5, 2));
    });

    for (var i = 0; i < 5; i++) {

    }

    for (i = 0; i < 10; i++) {

    }

});

console.log(title) // nope