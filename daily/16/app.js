// What functions do I need here?

// Make an AJAX request to fetch all coffee shops,
// and render them to the DOM.
function getCoffee() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://hidden-spire-54138.herokuapp.com/coffee-shops');
    request.addEventListener('load', function () {
        let shops = JSON.parse(request.responseText);
        console.log(shops);
        let parent = document.querySelector('#shop-list');

        for (let i = 0; i < shops.length; i++) {
            let element = document.createElement('li');
            element.textContent = shops[i].name + ' (' + shops[i].rating + ' stars)';
            parent.appendChild(element);
        }

    });
    request.send();
}

function addNewShop() {
    let shop = {
        name: document.querySelector('#new-name').value,
        rating: parseInt(document.querySelector('#new-rating').value),
        price: parseInt(document.querySelector('#new-price').value),
    };

    let request = new XMLHttpRequest();
    request.open('POST', 'http://hidden-spire-54138.herokuapp.com/coffee-shops');
    request.send(JSON.stringify(shop));
}

window.addEventListener('load', function () {
    console.log('go time');

    getCoffee();

    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        addNewShop();
    });
});