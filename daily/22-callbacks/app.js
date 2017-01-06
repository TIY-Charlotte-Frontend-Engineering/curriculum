/**
 * Copy starter kit into a new directory.
 * 
 * Callbacks in an application: ajax get requests
 */

function sayIt(thing) {
    console.log('I say: ' + thing);
}

function beWise(phrase, say) {
    say('A wise person once said ' + phrase);
}

beWise('A penny saved is a penny earned.', sayIt);

// Q1: what are the types of beWise params?
// Q2: what is the value of 'say' in beWise in this case?
// Q3: what's the output?

function showBooks(info) {
    function getAuthor(book) {
        return book.author;
    }

    console.log('showing all the books');
    console.log(info.books.map(getAuthor));
}

let ajax = {
    get: function (url, show) {
        // do ajax
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('load', function () {
            let response = JSON.parse(request.responseText);
            show(response); // need to add parameter
        });
        request.send();
    },
    post: function () {

    },
};

window.addEventListener('load', function () {
    ajax.get('http://api.queencityiron.com/books', showBooks);
    ajax.post();

    // get('http://api.queencityiron.com/trinkets', /* add trinkets show function */);
    // get('http://api.queencityiron.com/superheroes', /* add superheroes show function */);
    // get('http://api.queencityiron.com/chats', /* add chats show function */);
});