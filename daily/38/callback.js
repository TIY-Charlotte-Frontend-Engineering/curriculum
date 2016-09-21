function getPokemon(thingToDo) {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:7000/pokemon');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log(response);

        // Calling the thingToDo function
        thingToDo(response);
    });
    request.send(); // do not forget like i do
}

/* Console log each pokemon's name */
function printEmAll(pokemon) {
    for (let i = 0; i < pokemon.length; i++) {
        console.log(pokemon[i].name);
    }
}


window.addEventListener('load', function () {
    // Make the API request at the beginning.
    getPokemon(printEmAll);
});



// Other callbacks:
//   1. Click events
//   2. Backbone change, call this.render()
//   3. onDrop
//   4. map, filter, reduce()