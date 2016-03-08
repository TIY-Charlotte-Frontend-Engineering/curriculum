window.addEventListener('load', function () {
    var gtButton = document.getElementById('gotime');


    gtButton.addEventListener('click', function () {
        var oneThing = document.getElementById('thing');
        var anotherThing = document.getElementById('cost');

        var num1 = parseInt(oneThing.value);
        console.log(typeof (oneThing.value));
        console.log(typeof (num1));
        console.log(oneThing.value + anotherThing.value);
    });
});