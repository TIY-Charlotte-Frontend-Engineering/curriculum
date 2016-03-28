module.exports = {
    /**
     * A name is a string composed of only alphabetic strings and spaces.
     */
    name: function (element) {
        var input = element.value;
        var regexp = new RegExp('^[a-zA-Z]+$');

        console.log(regexp.test(input));
        return regexp.test(input);
    },

    phone: function (element) {
        var input = element.value;
        var regexp = new RegExp('[ (]*([0-9]{3})[ )]*([0-9]{3})[ ]*([0-9]{4})');

        var match = regexp.exec(input);
        console.log(match);
        if (match === null) {
            return false;
        }

        element.value = '(' + match[1] + ') ' + match[2] + ' - ' + match[3];
        return true;
    },
};