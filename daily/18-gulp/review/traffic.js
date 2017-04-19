let lights = [
    {
        color: 'red',
        intersection: '5th and Tabernacle',
        traffic: 'low',
        operators: ['Jones', 'Hartford', 'Kensington'],
    },
    {
        color: 'yellow',
        intersection: 'Hudson and Cornwallis',
        traffic: 'low',
        operators: ['Jones', 'Kensington'],
    },
    {
        color: 'yellow',
        intersection: 'Oak Point',
        traffic: 'high',
        operators: ['Jones', 'Hartford'],
    },
];

window.addEventListener('load', function () {
    // Two things to use mustache:
    //  - template
    //  - info to populate the template with
    let template = document.querySelector('#light-template').innerHTML;
    let parent = document.querySelector('main');

    for (let i = 0; i < lights.length; i++) {
        // 1. create a new container <section>
        let container = document.createElement('section');
        container.classList.add('light');

        container.innerHTML = Mustache.render(template, lights[i]);

        // append to parent
        parent.appendChild(container);
    }
});