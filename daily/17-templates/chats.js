
function addChat(chat) {
    // Improvement: let's not dump a bunch of HTML in our JS file.
    // let template = '<p class="from">From {{ name }}:</p><p>{{ message }}</p>';
    let template = document.querySelector('#message-template').innerHTML;

    // Q: what is happening here?
    let parent = document.querySelector('ul');
    let container = document.createElement('li');
    container.innerHTML = Mustache.render(template, {
        name: chat.from,
        message: chat.message,
    });

    parent.appendChild(container);
}

function getChats() {
    let req = new XMLHttpRequest();
    req.open('get', 'https://tiy-28202.herokuapp.com/chats');
    req.addEventListener('load', function () {
        let response = JSON.parse(req.responseText);

        for (let i = 0; i < response.chats.length; i++) {
            addChat(response.chats[i]);
        }
    });
    req.send();
}

/**
 * When the page loads, we'll use Mustache to generate
 * some DOM content.
 */
window.addEventListener('load', function () {
    getChats();
});