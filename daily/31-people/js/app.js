
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