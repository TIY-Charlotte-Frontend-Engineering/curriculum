/* DO NOT USE THIS CODE FOR YOUR ASSIGNMENT */

// Dependency list
let app = angular.module('QuestionKingApp', []);

// A service is a 'singleton', meaning there's only ONE instance
// of this thing in the entire application.
//
// We create a 'factory' that manufactures GuessService's.
app.factory('GuessService', function () {
    let guesses = [];

    // Return a GuessService.
    return {
        // Add a new guess.
        add: function (q, right, points) {
            guesses.push({
                question: q,
                correct: right,
                points: points,
            });
        },
        // Get all guesses.
        all: function () {
            return guesses;
        },
    };
});

app.factory('QuestionService', function () {
    let questions = [
        {
            question: 'How hot is the fire?',
            answer: 'Quite',
            points: 200,
        },
        {
            question: 'How heavy is the earth?',
            answer: 'Rather',
            points: 400,
        },
        {
            question: 'How cold does the wind blow?',
            answer: 'Bitterly',
            points: 600,
        }
    ];

    let current = 0;

    return {
        getNext: function () {
            let q = questions[current];
            current++;

            return q;
        },
    };
});

// Add 'GuessService' if you need to use the GuessService.
// Leave it out if you don't.
app.controller('GuessHistoryController', function ($scope, GuessService) {
    // What do we need?
    // $scope.history = [
    //     { correct: true, question: 'How hot is the fire?' },
    //     { correct: false, question: 'How hot is the road?' },
    // ];
    $scope.history = GuessService.all();
});

// Create a new controller
app.controller('GameController', function ($scope, GuessService, QuestionService) {
    // 'current' is now an object.
    let currentQ = QuestionService.getNext();

    // Question text
    $scope.question = currentQ.question;
    // User's guess
    $scope.guess = '';
    // Total score
    $scope.score = 0;

    $scope.makeAGuess = function () {
        if ($scope.guess === currentQ.answer) {
            // Correct!
            $scope.score = $scope.score + currentQ.points;
            GuessService.add(currentQ.question, true, currentQ.points);
        } else {
            // Incorrect
            $scope.score = $scope.score - currentQ.points;
            GuessService.add(currentQ.question, false, -1 * currentQ.points);
        }

        // Move on to the next question.
        currentQ = QuestionService.getNext();
        $scope.question = currentQ.question;
    };
});