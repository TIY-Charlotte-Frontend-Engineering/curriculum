
module.exports = {
    /* Subjects: array of strings */
    show: function (subjects) {
        // map, forEach, for loop
        // map: run over all items to create a new array
        //      (does return an array)
        // forEach: run over all items to create a side effect
        //      (does not return an array)
        let parent = document.querySelector('#pokemon');

        // Option #1: good ol' for loop
        // for (let i = 0; i < subjects.length; i++) {
        //     let li = document.createElement('li');
        //     li.textContent = subjects[i];

        //     parent.appendChild(li); // doesnt exist yet
        // }

        // Option #2: good new forEach function 
        subjects.forEach(function (pokemon) {
            let li = document.createElement('li');
            li.textContent = pokemon;

            parent.appendChild(li); // doesnt exist yet
        });
    },
};