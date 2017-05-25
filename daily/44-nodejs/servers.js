/**
 * Leaving the browser
 * 
 * The browser gives us certain things (document, window objects) but
 * removes a LOT of stuff - usually for security. For example, we
 * can't read files, write files, etc - it would be bad if any website
 * could edit files on your computer, right?
 * 
 * Once you're out of the browser, any program (Javascript or otherwise)
 * can do a lot more using the same tools we've been using all along like
 * loops, variables, conditionals, etc. Browser vs non-browser is one of
 * the biggest mental distinctions for frontend developers learning backend
 * development.
 * 
 * 1. Instead of dealing with a web page, you are dealing with the file
 * system (folders, files, etc).
 * 
 * 2. Instead of making requests, you're usually responding to them (though you
 * can make them too).
 * 
 * 3. You have the ability to save information indefinitely (writing to files or
 * databases). The 'refreshing a window deletes everything' issue of frontend is
 * not a thing in backend.
 */

/**
 * Node is an open-sources project that runs JS outside of the browser using V8,
 * Google's Javascript runtime from Chrome.
 */

// Import a library that allows us to read files.
// const fs = require('mz/fs');

// Write an array to a file.
// let dataString = [
//     { title: 'Ferngully', year: 1997 },
//     { title: 'Fox and the Hound', year: 1993 },
//     { title: 'Toy Story 2', year: 1996 }, 
//     { title: 'Lady and the Tramp', year: 1991 },
//     { title: 'Aristocats', year: 1994 },
//     { title: 'Fievel Goes West', year: 1989 },
//     { title: 'Brave Little Toaster', year: 1987 },
// ];

// fs.writeFile('data.json', JSON.stringify(dataString));

// const fs = require('mz/fs');

// fs.readFile('data.json').then(function (content) {
//     const movies = JSON.parse(content);

//     for (let i = 0; i < movies.length; i++) {
//         if (movies[i].year < 1993) {
//             console.log(movies[i].title + ' is a classic. It came out in ' + movies[i].year);
//         } else {
//             console.log(movies[i].title + ' came out in ' + movies[i].year);
//         }
//     }
// });

/* Servers are programs that run forever, waiting for things to happen. */
const mz = require('mz/fs');
const hapi = require('hapi'); // library for making api servers

/**
 * This is ONE EXAMPLE of a server. This can be useful for developing throwaway backends while
 * your backend partner develops the real version.
 * 
 * 1. Read in our movies list and JSON.parse it.
 * 2. Start a Hapi server, listening on http://localhost:9191
 * 3. Set up a GET route to /movies that returns all movies
 */
mz.readFile('data.json').then(function (text) {
    const movies = JSON.parse(text);
    for (let i = 0; i < movies.length; i++) {
        movies[i].id = i;
    }

    const server = new hapi.Server(); // constructor!
    server.connection({
        host: 'localhost',
        port: 9191,
    });

    server.route({
        method: 'GET',      // when people make a GET request
        path: '/movies',    // ...to this URL http://localhost:9191/movies
        handler: function (request, reply) {
            reply(movies); // return the full list of movies
        },
    });

    // Get details about a specific movie
    server.route({
        method: 'GET',
        path: '/movies/{movie_id}', // route param, just like in Angular 
        handler: function (request, reply) {
            // get the parameter from the URL
            const id = request.params.movie_id;

            // since its the index, we can just return movies[id]
            reply(movies[id]);
        },
    });

    // CHALLENGE: make a search endpoint (/movies/search/Toaster 
    // should return movies containing 'Toaster')
    // .includes()
    server.route({
        method: 'GET',
        path: '/movies/search/{search}',
        handler: function (request, reply) {
            const search = request.params.search;

            reply(movies.filter(movie => movie.title.includes(search)));
        },
    });

    server.route({
        method: 'POST',
        path: '/movies',
        handler: function (request, reply) {
            // add a movie to the movies array
            const movie = request.payload; // access request body
            movies.push(movie);

            reply();
        },
    });

    // CHALLENGE: return only the movies released before 1993
    server.route({
        method: 'GET',
        path: '/oldies',
        handler: function (request, reply) {
            // TODO: this is where all code goes
            // const oldies = [];
            // for (let i = 0; i < movies.length; i++) {
            //     if (movies[i].year < 1993) {
            //         oldies.push(movies[i]);
            //     }
            // }

            // reply(oldies);

            reply(movies.filter(movie => movie.year < 1993));
        },
    });

    server.start();
});