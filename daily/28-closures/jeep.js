function jeep() {
    let mileMarker = 0;
    let fuel = 100;
    
    return {
        forward: function () {
            mileMarker++;
            fuel--;
        },
        backward: function () {
            mileMarker--;
            fuel--;
        },
        mile: function () {
            return mileMarker;
        },
        fuel: function () {
            return fuel;
        },
    };
}

window.addEventListener('load', function () {
    let buggy = jeep();
    // buggy.forward();

    update(buggy.mile(), buggy.fuel());

    let forward = document.querySelector('#forward');
    let backward = document.querySelector('#backward');

    forward.addEventListener('click', function () {
        buggy.forward();

        update(buggy.mile(), buggy.fuel());
    });

    backward.addEventListener('click', function () {
        buggy.backward();

        update(buggy.mile(), buggy.fuel());
    });
});

/* Update the DOM */
function update(mile, fuel) {
    document.querySelector('.location').textContent = 'Mile marker ' + mile;
    document.querySelector('.fuel').textContent = 'Fuel: ' + fuel;
}