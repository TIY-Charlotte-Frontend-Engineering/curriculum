module.exports = {
    /* Return true for valid license plate. */
    license: function (plate) {
        return /[A-Z0-9]{3} ?[A-Z0-9]{3}/.test(plate);
    },

    /* Return true for valid IP address. */
    ip: function (addr) {
        return /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(addr);
    },

    /* Return true for valid HTML tag. */
    html: function (tag) {
        return /<[a-zA-Z]+>/.test(tag);
    }
};