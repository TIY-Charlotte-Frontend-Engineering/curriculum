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