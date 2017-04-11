let animals = [
    { name: 'Cow', sound: 'Moo' },
    { name: 'Frog', sound: 'Ribbit' },
    { name: 'Chicken', sound: 'Cluck' },
];

// We give functions names so we can refer to them
// later. If we're only ever going to use a function
// once, its often nice to make it 'anonymous', meaning
// nameless.

function init() {
    // let el = document.createElement('li');
    // el.textContent = 'Cow';

    // Add the element to the page
    let parent = document.querySelector('main ul');
    // parent.appendChild(el);

    // Create elements in a loop
    for (let i = 0; i < animals.length; i++) {
        let el = document.createElement('li');
        // Add a class to the <li>
        el.classList.add(animals[i].name.toLowerCase());
        el.classList.add('animal');

        let label = document.createElement('p');
        label.textContent = animals[i].name;

        let btn = document.createElement('button');
        btn.textContent = 'Make noise';

        btn.addEventListener('click', function () {
            console.log(animals[i].sound);
        });

        el.appendChild(label);
        el.appendChild(btn);

        parent.appendChild(el);
    }
}

window.addEventListener('load', init);

// window.addEventListener('load', function () {
//
// });