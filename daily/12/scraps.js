// Create the whole profile.
function createProfile() {
    // Create a container to hold all of this stuff.
    let container = document.createElement('div');
    container.classList.add('person');

    // Create an h2, which is going to be a child of the DIV!
    let name = document.createElement('h2');
    name.textContent = 'Frankie';
    // When I click on the <h2>, console.log something.
    name.addEventListener('click', function () {
        console.log('CLICKED ON FRANKIE');
    });

    // Add the <h2> to the <div>
    container.appendChild(name);

    // Add the <div> to the <body>
    let parent = document.querySelector('body');
    parent.appendChild(container);

    //   let image = document.createElement('img');
    //   image.src = "https://randomuser.me/api/portraits/women/24.jpg";

    //   // Adoption time.
    //   let parent = document.querySelector('body');
    //   parent.appendChild(image);
}

window.addEventListener('load', function () {
    setInterval(createProfile, 2000);
});
