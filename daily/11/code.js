//var title = 'My Heart Will Go On';
//var artist = 'Celine Dion';
//var year = 1997;
//var songs = [];
var songs = {
    list: [],
    add: function (song) {
        this.list.push(song);
    },
};

songs.add(song);

var song = {
    title: 'My Heart Will Go On',
    artist: 'Celine Dion',
    year: 1997,
    emotions: {
        fear: 'throughout',
        comfort: 'lacking',
        anxiety: 'definitely',
    },
    lovedBy: 'all',
    sing: function () {
        console.log('Im flying Jack');
        return 'Im flying Jack';
    },
    announce: function () {
        console.log(this.title + ' came out in ' + this.year);
    },
    sales: function () {
        return 1000 * (2016 - this.year);
    },
};

songs.push(song);

var song2 = {
    title: 'All By Myself',
    artist: 'Celine Dion',
    year: 1996,
    emotions: {
        passion: 'exclusively'
    },
    lovedBy: 'oneself',
    sing: function () {
        console.log('alllll byyyyyy myyyyyseeeeeeellllllffff');
        return 'alllll byyyyyy myyyyyseeeeeeellllllffff';
    },
    announce: function () {
        console.log(this.title + ' came out in ' + this.year);
    },
};

songs.push(song2);

function run() {
    for (var i = 0; i < songs.length; i++) {
        console.log(songs[i].title + ' by ' + songs[i].artist);
        songs[i].sing();
        songs[i].announce();
    }
}