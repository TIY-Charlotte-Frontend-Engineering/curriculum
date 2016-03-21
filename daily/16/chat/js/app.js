/* jslint browser: true */
var url = 'http://chat.queencityiron.com/messages';



window.addEventListener('load', function () {
    function getMessages() {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            // Parse the input into an array
            var input = JSON.parse(request.responseText);

            // DONT DUPLICATE
            // Clear the existing elements.

            // Nodes
            // innerHTML
            var parent = document.getElementById('chatLog');
            parent.innerHTML = '';
            //for (var i = 0; i < parent.childNodes.length; i++) {
            //    parent.firstChild.remove();
            //}

            // Add new elements per message.
            for (var i = 0; i < input.length; i++) {
                // Create a new HTML element.
                var element = document.createElement('li');
                element.textContent = input[i].user + ': ' + input[i].message;
                element.classList.add('whatever-class-name');
                element.setAttribute('id', 'message-' + input[i].id);

                // Give it to chatLog as a child
                parent.appendChild(element);
                // Rejoice: complete
            }
        };
        request.send();
    }

    // Let's do sending first.
    var sendButton = document.getElementById('sendMessage');
    sendButton.addEventListener('click', function () {
        // Get the username and message
        // Send the post request

        var username = document.getElementById('username').value;
        var message = document.getElementById('message').value;

        // Make the AJAX request.
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.send(JSON.stringify({
            name: username,
            message: message,
        }));
    });

    var getButton = document.getElementById('getMessages');
    getButton.addEventListener('click', function () {
        getMessages();
    });

    // When the page first loads, get all messages.
    getMessages();
});