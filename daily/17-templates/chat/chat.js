
function addChat(chat) {
    console.log('adding ' + chat.message);

    let parent = document.querySelector('ul');
    let container = document.createElement('li');

    // Instead of just adding text, we need to do emoji things.
    // Approach #1: use innerHTML instead of textContent
    // container.textContent = chat.message;
    // let message = chat.message.replace(':)', '<img src="http://emojione.com/wp-content/themes/emojione.v2/images/slides/v3preview/263a.svg">');
    // let message = chat.message.split(':)').join('<img src="http://emojione.com/wp-content/themes/emojione.v2/images/slides/v3preview/263a.svg">');
    // message = message.split(':(').join('<img src="http://emojione.com/wp-content/uploads/assets/emojis/1f921.svg">');
    
    // container.innerHTML = message;

    let tempSections = chat.message.split(':)');
    let sections = [];

    for (let i = 0; i < tempSections.length; i++) {
        sections.push(tempSections[i]);

        // Leave the last smiley face off
        if (i !== tempSections.length - 1) {
            sections.push(':)');
        }
    }

    // We've broken up text into different 'buckets' so that
    // we can now create different elements.
    // Render different elements depending on the text.

    for (let i = 0; i < sections.length; i++) {
        // If its an emoji, generate image el
        if (sections[i] === ':)') {
            let el = document.createElement('img');
            el.setAttribute('src', 'http://emojione.com/wp-content/uploads/assets/emojis/1f921.svg');

            container.appendChild(el);
        // If its not, generate span
        } else {
            let el = document.createElement('span');
            el.textContent = sections[i];

            container.appendChild(el);
        }
    }

    // append pieces to parent
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

window.addEventListener('load', function () {
    getChats();
}); 