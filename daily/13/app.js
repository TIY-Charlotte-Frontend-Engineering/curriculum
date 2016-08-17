// Add DOM elements to display a new friend using AJAX.
function addFriend() {
    // console.log('adding a friend');

    // Create a new AJAX request.
    //   'new' is used to construct a new object
    //    ^ we'll talk about it later
    let request = new XMLHttpRequest();
    // Q1: what URL do we get info from?
    request.open('GET', 'https://randomuser.me/api/');
    // Q2: what do we do once we have it?
    //     the return of the load event
    request.addEventListener('load', function () {
        // console.log('got the target');
        // Another built-in part of the XMLHttpRequest
        let delivery = JSON.parse(request.responseText);
        // console.log(delivery);
        // wuuuuuuuuuuuuut??
        // Dig around in the data they send me to find the 
        // part that I care about.
        let person = delivery.results[0];
        // console.log(person);
        // console.log(person.name.first + ' ' + person.name.last);
        let x = person.name.first;

        // Create DOM elements and append them.
        let villager = document.createElement('p');
        villager.textContent = x;
        let parent = document.querySelector('body');

        parent.appendChild(villager);
    });
    // Q3: launch
    request.send();
}

window.addEventListener('load', function () {
    // addFriend();
    let iid = null; // interval id

    let villagerBtn = document.querySelector('#getVillager');
    villagerBtn.addEventListener('click', function () {
        iid = setInterval(addFriend, 2000);
        console.log(iid);
    });

    let offBtn = document.querySelector('#stopVillager');
    offBtn.addEventListener('click', function () {
        clearInterval(iid);
    });

    // setInterval(addFriend, 2000);
});