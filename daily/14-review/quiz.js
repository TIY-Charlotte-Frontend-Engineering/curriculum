let current = {
    answer: null,
    points: 0,
}; // the current question

let score = 0; // the player's current score

/**
 * Anonymous function version of init().
 */
window.addEventListener('load', function () {
    // 1. get a question and related info
    // 2. make the button check the answer and get a new q
    getNewQuestion();

    let submit = document.querySelector('#submit');
    submit.addEventListener('click', checkAnswer);
});

function checkAnswer() {
    // 1. check if the text they typed in (guess) is the same
    //    as the answer to the question.
    let guessBox = document.querySelector('#guess');

    // Check their guess against the known answer
    if (guessBox.value === current.answer) {
        // give points
        score = score + current.points;
        // display it on the screen
        document.querySelector('#player-score').textContent = score;
    }

    guessBox.value = '';
    getNewQuestion();
}

/* Make an AJAX request to get a new question. */
function getNewQuestion() {
    let request = new XMLHttpRequest(); // create new request obj
    request.open('GET', 'http://jservice.io/api/random'); // request what?
    request.addEventListener('load', function () {
        // responseText is built-in to the XMLHttpRequest object
        let response = JSON.parse(request.responseText);
        let question = response[0];

        console.log(question);
        showQuestion(question);

        // Save important information about this question.
        current.answer = question.answer;
        current.points = question.value;
    }); // what do we do once we get the response back?
    request.send();
}

function showQuestion(q) {
    // dommy things
    // Update the question text
    let question = document.querySelector('#question');
    question.textContent = q.question;

    // Update the points display
    let points = document.querySelector('#points');
    points.textContent = q.value;

    // Update the category
    let category = document.querySelector('#category');
    category.textContent = q.category.title;
}