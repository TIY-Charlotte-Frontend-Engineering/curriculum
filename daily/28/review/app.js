// require lodash
// build an array of friends
// show all the friends in the dom (append, one could say)
// click listener on the search button
// draggable and droppable

let friends = [
    { name: 'Lindsey Lohan', sex: 'female', hometown: 'Paris, France', bestie: false },
    { name: 'Gregory Wallace', sex: 'male', hometown: 'Paris, France', bestie: false },
    { name: 'Usher', sex: 'male', hometown: 'Paris, France', bestie: false },
    { name: 'Princess Diana', sex: 'female', hometown: 'Canterbrry, England', bestie: false },
];

function render(peeps) {
    $('#friends').empty();

    for (let i = 0; i < peeps.length; i++) {
        if (friends[i].bestie) {
            $('#friends').append('<li class="friend bestie"><h3>' + friends[i].name + '</h3><p>Hailing from ' + friends[i].hometown + '</p></li>');
        } else {
            $('#friends').append('<li class="friend"><h3>' + friends[i].name + '</h3><p>Hailing from ' + friends[i].hometown + '</p></li>');
        }
    }

    // what do we want to make draggable?
    $('.friend').draggable({ revert: true });
}

window.addEventListener('load', function () {
    render(friends);

    $('#dropzone').droppable({
        drop: function (event, ui) {
            let name = ui.draggable.find('h3').text();
            console.log(name);

            for (let i = 0; i < friends.length; i++) {
                // If they have the matching name, change bestie to be true.
                if (name === friends[i].name) {
                    friends[i].bestie = true;
                } else {
                    friends[i].bestie = false;
                }
            }

            render(friends);
            console.log("GOLLY MISTER");
        }
    });
});