
window.addEventListener('load', function () {



    let creatures = ['parrot', 'falcon', 'squirrel', 'dog'];


    let parent = document.querySelector('#pets');
    for (let i = 0; i < creatures.length; i++) {

        let pet = document.createElement('li');
        pet.innerHTML = Mustache.render(
            document.querySelector('#pet-template').innerHTML,
            { animalName: creatures[i], adjective: 'fuzzy' }
        );
        parent.appendChild(pet);
    }
});