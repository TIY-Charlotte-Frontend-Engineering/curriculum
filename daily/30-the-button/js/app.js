window.addEventListener('load', function () {
    const loginView = document.querySelector('#login');
    const gameView = document.querySelector('#game');
    // Set up event listener on my login page.

    const login = document.querySelector('#go');
    login.addEventListener('click', function () {
        loginView.classList.add('hidden');
        gameView.classList.remove('hidden');
    });

    const theButton = document.querySelector('#the-button');
    theButton.addEventListener('click', sendClick);

    setInterval(() => {
        getStatus(showStatus);
    }, 500);
});

function sendClick() {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://powerful-plateau-42927.herokuapp.com/click');
    request.setRequestHeader('Content-type', 'application/json');

    request.send(JSON.stringify({
        name: document.querySelector('#name').value,
    }));
}

/**
 * Ben will send us the current button score and the high
 * score list.
 */
function getStatus(success) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://powerful-plateau-42927.herokuapp.com/status');
    request.addEventListener('load', function () {
        const response = JSON.parse(request.responseText);
        success(response);
    });
    request.send();
}

function showStatus(status) {
    console.log(status);
    const parent = document.querySelector('#high-scores');
    parent.innerHTML = '';

    // Update the current score in the DOM
    document.querySelector('#current-score').textContent = status.current;

    // Render the high score list
    for (let i = 0; i < status.scores.length; i++) {
        const score = status.scores[i];
        score.rank = i + 1;

        const li = document.createElement('li');
        li.innerHTML = Mustache.render(
            document.querySelector('#high-score-template').innerHTML,
            score
        );
        parent.appendChild(li);
    }
}