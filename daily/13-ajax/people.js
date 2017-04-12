
/**
 * For this app to work, we need to:
 *  - Create an array of objects.
 *  - Create a new <li> element with profile info.
 *  - Button to make ^ work multiple times.
 * 
 *  - Set it up on an interval.
 *  - Add liked people to ordered list.
 */

let profiles = [
    { name: 'Juanette', photo: 'https://randomuser.me/api/portraits/women/92.jpg' },
    { name: 'Harold', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Vince', photo: 'https://randomuser.me/api/portraits/men/25.jpg' },
    { name: 'Peggy', photo: 'https://randomuser.me/api/portraits/women/52.jpg' },
];

let liked = [];

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
        liked.push(person); // keep track of array
        showLiked(person);  // show this person in DOM
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

window.addEventListener('load', function () {
    // console.log('success!');

    let btn = document.querySelector('#add');
    btn.addEventListener('click', function () {
        // console.log('new person');
        makePerson(profiles[0]);
    });

    // Add one new person every 5 seconds
    // First argument: function to run
    // Second argument: how often to run it
    setInterval(function () {
        makePerson(profiles[1]);
    }, 5000);

    makePerson(profiles[3]);
});