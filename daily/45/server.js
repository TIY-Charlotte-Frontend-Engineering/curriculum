// import fs library for access to filesystem
var fs = require('fs');
var request = require('request');
var prompt = require('prompt');

var admin = {
    username: 'paul',
    password: 'keepout'
};

prompt.start();

prompt.get(['username', 'password'], function (error, result) {
    console.log('Username: ', result.username);
    console.log('Password: ', result.password);

    if (result.username !== admin.username || result.password !== admin.password) {
        console.log('nope, invalid user');
        return;
    }

    // Read a list of stories
    fs.readFile('stories.txt', function (error, data) {
        var stories = [];

        if (error) {
            console.log('Error: file doesnt exist');
            console.log(error);
        } else {
            console.log('read data successfully');
            stories = JSON.parse(data);
            console.log(stories.length + ' stories read');
        }

        // Make web requests
        request('http://chat.queencityiron.com/api/news/latest', function (error, response, body) {
            var content = JSON.parse(body);

            // get list of id's of existing stories
            var ids = stories.map((story) => story.id);

            // check each new story to see if its id is in the list
            var newStories = content.stories.filter((story) => ids.indexOf(story.id) < 0);

            // if not, add it to the stories array
            console.log('adding ' + newStories.length + ' new stories...');
            for (var i = 0; i < newStories.length; i++) {
                stories.push(newStories[i]);
            }

            fs.writeFile('stories.txt', JSON.stringify(stories));
        });
    });

});