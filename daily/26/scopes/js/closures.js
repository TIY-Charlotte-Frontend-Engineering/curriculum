function newCount(start) {
    var burger = start;
    //    var info = 'hi';
    return {
        current: function () {
            return burger;
        },
        increase: function () {
            burger = burger + 1;
        }
    };
}

function announce(first, second) {
    return first.current() + second.current();
}

window.addEventListener('load', function () {
    var counter = newCount(5);
    counter.increase();
    console.log(counter.current());

    var pattys = newCount(10);
    pattys.increase();
    counter.increase();
    console.log(pattys.current());

    announce(counter, pattys);
});