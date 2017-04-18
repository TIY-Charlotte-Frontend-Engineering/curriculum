/**
 * Convert a message's ID into an ID for the DOM element. I do this
 * in two different places in my code and things would break if I
 * did it differently, so making it into a function for one less
 * thing to remember!
 */
function makeId(num) {
    return 'message-' + num;
}

/**
 * Get all of the latest messages, and only add in ones that don't exist
 * in the DOM yet.
 */
function getLatestMessages() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://tiy-28202.herokuapp.com/chats');
    req.addEventListener('load', function () {
        let messages = JSON.parse(req.responseText).chats;

        for (let i = 0; i < messages.length; i++) {
            // Does the message exist in the dom already? If not, add.
            let id = '#' + makeId(messages[i].id);
            if (!document.querySelector(id)) {
                showMessage(messages[i]);
            }
        }

    });
    req.send();
}

/**
 * Send a message. Pulls the username and message from the text 
 * boxes on the page.
 */
function showMessage(msg) {
    let parent = document.querySelector('main ul');

    let container = document.createElement('li');
    container.setAttribute('id', makeId(msg.id));
    container.classList.add('message');

    let name = document.createElement('p');
    name.classList.add('from');
    name.textContent = msg.from;

    let text = document.createElement('p');
    text.classList.add('text');
    text.textContent = msg.message;

    container.appendChild(name);
    container.appendChild(text);

    parent.appendChild(container);
}

/**
 * Set up the page.
 *  - Add click events
 *  - Create a GET request interval
 */
window.addEventListener('load', function () {
    let username = document.querySelector('#username');
    let message = document.querySelector('#message');
    let send = document.querySelector('#send');

    send.addEventListener('click', function () {
        let req = new XMLHttpRequest();
        req.open('POST', 'https://tiy-28202.herokuapp.com/chats');

        req.send(JSON.stringify({
            from: username.value,
            message: message.value,
        }));
    });

    // Get messages once at the very beginning
    getLatestMessages();

    // Retrieve new messages every five seconds
    setInterval(function () {
        getLatestMessages();
    }, 5000);
});