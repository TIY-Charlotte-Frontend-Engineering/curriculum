/**
 * An API ('application programming interface') is a method for
 * two computers to communicate with each other.
 * 
 * One computer makes a request, the other responds to it.
 */

// Pass in an object of the person to make
function makePerson(person) {
    let parent = document.querySelector('main ul');

    let element = document.createElement('li');
    element.classList.add('person');

    // name in <p>
    let name = document.createElement('p');
    name.textContent = person.name;

    // image in an <img>
    let pic = document.createElement('img');
    pic.setAttribute('src', person.photo);

    // two buttons in <button>
    let upvote = document.createElement('button');
    upvote.textContent = 'Like';
    upvote.addEventListener('click', function () {
        console.log(person.name + ' was liked');

        // Add to 'liked' list in DOM
        // liked.push(person); // keep track of array
        // showLiked(person);  // show this person in DOM
    });

    let downvote = document.createElement('button');
    downvote.textContent = 'Nope';
    downvote.addEventListener('click', function () {
        console.log('You noped ' + person.name);

        // Reduce opacity
        // element.style.opacity = 0.5; // don't
        element.classList.add('disabled');
    });

    element.appendChild(pic);
    element.appendChild(name);
    element.appendChild(upvote);
    element.appendChild(downvote);

    parent.appendChild(element);
}

function getPerson() {
    // API URL: https://randomuser.me/api/

    // An AJAX request (Asynchronous Javascript and XML) is
    // when we make a request for information AFTER the page
    // has loaded. Very common in modern web apps.
    let kangaroo = new XMLHttpRequest();                // i want to make ajax req
    kangaroo.open('GET', 'https://randomuser.me/api/'); // ... to this api
    kangaroo.addEventListener('load', function () {
        // .responseText is built-in to Javascript
        // console.log(kangaroo.responseText);

        // Almost all API's will use a structure called 'JSON',
        // which stands for JavaScript Object Notation because
        // it looks a lot like Javascript (winning).
        let response = JSON.parse(kangaroo.responseText);
        let person = {
            name: response.results[0].name.first + ' ' + response.results[0].name.last,
            photo: response.results[0].picture.medium,
        };

        makePerson(person);
    });                 // when I get a response, run this function
    kangaroo.send();    // warning: you will forget this -- don't! it won't work
}

window.addEventListener('load', function () {
    getPerson();
    // getPerson();

    let btn = document.querySelector('#add');
    btn.addEventListener('click', function () {
        getPerson();
    });

    setInterval(function () {
        getPerson();
    }, 5000);
});

// Challenge: make the 'add new' button work
// Challenge: get a new random person every 5 seconds