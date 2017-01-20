(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function HelpDesk() {
    this.professions = {};

    this.ask = function (profession, request) {
        // this.professions[profession] is a function 
        // whatever we pass as the first param is 'task'
        // we want 'request' to be our 'task'
        this.professions[profession](request);
    };

    /* When someone asks for a plumber, run func */
    this.registerAs = function (profession, func) {
        // this.professions.profession = func;
        this.professions[profession] = func;
    };

    return this;
}

window.addEventListener('load', function () {
    let desk = new HelpDesk();
    desk.registerAs('plumber', function (task) {
        console.log('i can help you with your ' + task + '. im a plumber');
    });
    desk.registerAs('paperboy', function (task) {
        console.log('ill deliver that ' + task + '. Im a paperboy');
    });

    desk.ask('plumber', 'crazy leak');
    desk.ask('plumber', 'waterfall');
    desk.ask('paperboy', 'bathtub explosion');
});
},{}]},{},[1]);
