
/**
 * Purpose: GET all orders and start rendering them as buttons.
 */
function getOrders() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://tiy-28202.herokuapp.com/order');
    req.addEventListener('load', function () {
        let response = JSON.parse(req.responseText);

        for (let i = 0; i < response.length; i++) {
            displayOrder(response[i]);
        }
    });
    req.send();
}

/* Display one button per order */
function displayOrder(order) {
    let parent = document.querySelector('header');

    let btn = document.createElement('button');
    btn.textContent = order.table_id;

    btn.addEventListener('click', function () {
        showFoods(order);
    });

    parent.appendChild(btn);
}

/* Update the list of foods in the DOM */
function showFoods(order) {
    let parent = document.querySelector('.foods ul');

    // Read the template from the <head> section
    let template = document.querySelector('#food-template').innerHTML;

    for (let i = 0; i < order.items.length; i++) {
        let container = document.createElement('li');
        container.innerHTML = Mustache.render(template, {
            foodName: order.items[i].name,
            foodPrice: order.items[i].price,
        });

        // could also do the loop in mustache: {{ #items }} {{ /items }}

        // innerHTML is a lot like textContent
        // container.innerHTML = '<p>hello</p><h1>ITS ME</h1>';

        parent.appendChild(container);
    }
}

window.addEventListener('load', function () {
    getOrders();
});

/**
 * === REGEX ===
 * 
 * Name:    ^[A-Z][a-zA-Z,' ]+$
 * CC:      ^([0-9]{4}[- ]?){3}[0-9]{4}$
 * Email:   ^[a-zA-Z0-9][a-zA-Z0-9._]*@[a-zA-Z]+(\.[a-zA-Z]+)+$
 */