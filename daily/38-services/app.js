/**
 * In real life, putting your whole app in one
 * big controller is not a good idea. You want
 * to break things up into smaller components
 * so that they're easier to understand.
 * 
 * Each controller has its own $scope.
 * 
 * We connect scopes using SERVICES (models).
 */

const app = angular.module('MusicApp', []);

app.controller('MusicListController', function ($scope, SongService) {
    // $scope.songs is the list of songs from our service
    $scope.songs = SongService.getSongs();

    $scope.play = function (next) {
        SongService.play(next);
    };
});

app.controller('NowPlayingController', function ($scope, SongService) {
    $scope.current = SongService.getCurrentSong();
});

// Creating a service: call app.factory()
// Services cannot have scopes.
app.factory('SongService', function ($http) {
    let songs = [];

    let current = {
        title: 'No song selected',
        artist: 'No artist',
        album: 'No album',
    };

    // .then() is a 'promise' - haven't talked about these yet.
    $http.get('https://api.spotify.com/v1/albums/1t9aGcPe3Mun4BMCTrGEBy').then(function (response) {
        const tracks = response.data.tracks.items;

        for (let i = 0; i < tracks.length; i++) {
            songs.push({
                title: tracks[i].name,
                artist: 'Celine Dion',
                album: 'Titanic Hits',
            });
        }
    });
    // This function will run ONCE at the very beginning
    // of your app, and should return your actual 'service.'

    return {
        getSongs() {
            return songs;
        },

        getCurrentSong() {
            return current;
        },

        play(song) {
            // Different from before: we want to update the existing
            // object, not overwrite it with a totally new one.
            current.title = song.title;
            current.artist = song.artist;
            current.album = song.album;
        },
    };
});

/**
 * Tonight's assignment: rebuild the chat app.
 * 
 * You should have a button to get new messages as well as a way to post
 * messages (we haven't talked about POST - will require some research and thought).
 * 
 * Render all messages to the screen. Users should provide a username. API info
 * is all the same. You have to use a service and at least two controllers.
 * 
 * Style w/ grid.
 */