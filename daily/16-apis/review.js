let shownIds = []; // which ID's have been displayed

window.addEventListener('load', function () {
    // what to do, how often to do (in ms)
    setInterval(getMessages, 2000);
});

// 1. Get all of our messages every 2 seconds
// 2. Update the list to include only the ones that are new 
// - Set an interval with setInterval that runs periodically

/* Function that makes the GET request */
function getMessages() {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://api.queencityiron.com/chats');
    req.addEventListener('load', function () {
        let response = JSON.parse(req.responseText);
        console.log(response);

        // Iterate over all the messages
        for (let i = 0; i < response.chats.length; i++) {
            let currentId = response.chats[i].id;
            // If the ID is already in the list, skip this message
            // If its not, display it and add it to the list
            if (shownIds.indexOf(currentId) === -1) {
                console.log(response.chats[i].message);
                // important! otherwise array is always empty
                shownIds.push(currentId); 
            }    
        }
    });
    req.send();
}

