/**
 * High temp   (85)
 * Low temp    (71)
 * Conditions  ('cloudy')
 * Day label   ('tomorrow', 'tuesday')
 */
window.addEventListener('load', function () {
    let parent = document.querySelector('#haircuts');
    let template = document.querySelector('#haircut-template').innerHTML;
    let haircuts = [];

    haircuts.push({
        name: 'Classic Bowl',
        length: 'medium',
        admirers: ['me', 'you', 'toby'],
        inStyle: true,
    });

    haircuts.push({
        name: 'Flock o Seagulls',
        length: 'too long',
        admirers: ['jeb'],
        inStyle: false,
    });

    haircuts.push({
        name: 'Mohawk',
        length: 'partial',
        admirers: ['pamela', 'ferdinand'],
        inStyle: true,
    });

    for (let i = 0; i < haircuts.length; i++) {
        // Create a new section.
        let section = document.createElement('section');
        // Populate the content of the section.
        // render(html string, values to populate)
        section.innerHTML = Mustache.render(template, haircuts[i]);
        // Bring it into the world.
        parent.appendChild(section);
    }
});