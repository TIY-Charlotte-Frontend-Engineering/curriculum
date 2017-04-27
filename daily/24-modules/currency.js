/**
 * This is our module. It doesn't
 * actually run on its own, but provides
 * functionality to other apps.
 * 
 * We need to export something.
 */

// Magic keywords for exporting.
module.exports = {
    symbols: {
        USD: 'United States Dollar',
        EUR: 'Euro',
    },
    addDollar: function (num) {
        return '$' + num;
    },
};