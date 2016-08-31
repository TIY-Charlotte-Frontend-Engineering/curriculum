function getTickers(afterwards) {
    let fetch = new XMLHttpRequest();
    // Where to make it
    fetch.open('GET', 'http://localhost:7000/stocks');
    // What to do when it completes
    fetch.addEventListener('load', function () {
        let response = JSON.parse(fetch.responseText);

        afterwards(response);
    });
    fetch.send();
} // end getTickers

function showAllTheData(stocks) {
    for (let i = 0; i < stocks.tickers.length; i++) {
        console.log(stocks.tickers[i].name + ': ' + stocks.tickers[i].price);
    }
}

function showBits(stocks) {
    for (let i = 0; i < stocks.tickers.length; i++) {
        console.log(stocks.tickers[i].name);
    }
}

window.addEventListener('load', function () {
    getTickers(showBits);
    // getTickers(showBits);
    console.log('frontier psychiatrist');
});

console.log('good day');