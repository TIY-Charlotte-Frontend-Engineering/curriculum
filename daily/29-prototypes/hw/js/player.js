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