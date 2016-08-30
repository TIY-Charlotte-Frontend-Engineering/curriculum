// 1. Request weather data for Charlotte
// 2. Display first five results
// 3. Allow people to search for other places
// 4. Toggle between F and C

// let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Charlotte,NC&appid=1f2671239fb2a0b6556a93f5873da5b1';

// Do the DOM thing
function displayWeather(forecasts) {
    let template = document.querySelector('#forecast-template').innerHTML;
    let parent = document.querySelector('main');

    for (let i = 0; i < forecasts.length; i++) {
        let biggun = document.createElement('section');
        biggun.innerHTML = Mustache.render(template, forecasts[i]);
        
        parent.appendChild(biggun);
    }
}

function getWeather(place) {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + place + '&appid=1f2671239fb2a0b6556a93f5873da5b1';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        let forecasts = [];

        for (let i = 0; i < 5; i++) {
            // forecasts.push(response.list[i].weather[0].description);
            forecasts.push({
                desc: response.list[i].weather[0].description,
                temperature: {
                    high: response.list[i].main.temp_max,
                    low: response.list[i].main.temp_min,
                    estimate: response.list[i].main.temp,
                },
            });
        }
        
        displayWeather(forecasts);
    });
    request.send(); // do this!
}

window.addEventListener('load', function () {
    getWeather('Charlotte,NC');    
});