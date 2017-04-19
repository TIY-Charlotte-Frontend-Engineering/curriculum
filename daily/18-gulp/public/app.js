/**
 * Javascript modules are the equivalent of partials in Sass; they let us
 * break code into multiple files.
 * 
 * Gulp is going to recombine them for us.
 */

function salesTax(x) {
    return x * 1.07;
}

window.addEventListener('load', function () {
    console.log(salesTax(140.89));
});