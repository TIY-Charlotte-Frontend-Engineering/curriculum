/*function runner() {
    return printr;
    //    return printr(5);
}

function printr(first) {
    return first;
}
*/
/*
function makeOp() {
    return slice;
}

function grate(first, second, op) {
    return first + op(second);
}

function slice(num) {
    return num * 2;
}
*/

function runner(num) {
    var val = function () {
        return num + 2;
    };

    return val;
}

window.addEventListener('load', function () {
    //    console.log(grate(num, 1, makeOp()));
    var run = runner(5);
    console.log(run());
    //    console.log(run(3));

    for (var i = 0; i < 3; i++) {
        var element = document.getElementById('item-' + i);
        element.addEventListener('click', function () {
            console.log(i);
        });
    }

});