function salesTax(x) {
    return x * 1.07;
}

function propertyTax(x) {
    return x * 1.15;
}

// Modules have to 'export' certain code. Whatever you export
// can be imported by other files.
//
// To export something, set module.exports = that thing.

module.exports = {
    sales: salesTax,
    property: propertyTax,   
};