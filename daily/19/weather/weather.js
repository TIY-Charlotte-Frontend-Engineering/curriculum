// Never needs to change again! Yes!
function getWeather(place, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Charlotte,%20NC&appid=1f2671239fb2a0b6556a93f5873da5b1');
    request.onload = function () {
        var response = JSON.parse(request.responseText);
        callback(response);
    };
    request.send();
}

function ktof(kelvin) {
    return kelvin * (9 / 5) - 459.67;
}

window.addEventListener('load', function () {
    getWeather('Charlotte, NC', function (weather) {
        var conditions = document.getElementById('conditions');
        conditions.textContent = weather.weather[0].description;

        var temperature = document.getElementById('temperature');
        temperature.textContent = ktof(weather.main.temp);
    });

});