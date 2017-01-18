(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let Player = require('./player');   // import player constructor
let Team = require('./team');       // import team constructor

window.addEventListener('load', function () {
    let chaserNames = ['Janet', 'Jeb', 'Jocelyn', 'Jenkins', 'Jobeth'];
    let runnerNames = ['Rodge', 'Rover', 'Rothgar', 'Reggie', 'Rihanna'];

    let c = new Team('chasers');
    let r = new Team('runners');

    for (let i = 0; i < chaserNames.length; i++) {
        let next = new Player(chaserNames[i]);
        c.add(next); // add a player
    }

    for (let i = 0; i < runnerNames.length; i++) {
        let next = new Player(runnerNames[i]);
        r.add(next); // add a player
    }

    console.log(r);
    console.log(c);

    c.won(r);
    r.won(); // or r.won(c)

    // first chaser tags first runner
    // c.roster[0].tag(r.roster[0]); // freeze
    // r.roster[0].tag(c.roster[0]); // nada
    // r.roster[1].tag(r.roster[0]); // unfreeze
    // c.roster[0].tag(r.roster[1]); // freeze
    // c.roster[1].tag(r.roster[2]); // freeze
    // r.roster[2].tag(r.roster[1]); // attempted freeze

});
},{"./player":2,"./team":3}],2:[function(require,module,exports){
module.exports = function Player (name) {
    // this object's name should be set to the
    // first parameter
    this.name = name; 
    this.team = null; // player's team
    this.frozen = false;
    this.hasFlag = false;

    // 'this' is the tagger
    // 'target' is the taggee
    this.tag = function (target) {
        if (this.team === 'chasers' && target.team === 'runners') {
            console.log(this.name + ' froze ' + target.name);
            target.frozen = true;
        }

        if (this.frozen === false && this.team === 'runners' && target.team === 'runners') {
            console.log(this.name + ' thawed ' + target.name);
            target.frozen = false;
        }
    };

    return this;
};
},{}],3:[function(require,module,exports){
module.exports = function Team (name) {
    this.name = name;
    this.roster = [];

    // goal: add recruit to current team
    this.add = function (recruit) {
        // 'this' is the current team
        this.roster.push(recruit);
        // set the player's team to be this team
        recruit.team = this.name;
    };

    // Return 'true' if this team has won. 'false' if not yet.
    this.won = function (enemy) {
        if (this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if (enemy.roster[i].frozen === false) {
                    return false;
                }
            }

            return true;
        }

        // if we've got the flag, return true
        if (this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].hasFlag === true) {
                    return true;
                }
            }
            // finish checking all players before saying 'no'
            return false;
        }
    };

    return this;
};
},{}]},{},[1]);
