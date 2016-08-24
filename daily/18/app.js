window.addEventListener('load', function () {
    let parent = document.querySelector('#haircuts');
    let template = document.querySelector('#haircut-template').innerHTML;
    // render(html string, values to populate)
    let haircuts = [];
    haircuts.push({
        name: 'Classic Bowl',
        length: 'medium',
    });

    haircuts.push({
        name: 'Flock o Seagulls',
        length: 'too long',
    });

    haircuts.push({
        name: 'Mohawk',
        length: 'partial',
    });

    for (let i = 0; i < haircuts.length; i++) {
        // Create a new section.
        let section = document.createElement('section');
        // Populate the content of the section.
        section.innerHTML = Mustache.render(template, haircuts[i]);
        // Bring it into the world.
        parent.appendChild(section);
    }
});