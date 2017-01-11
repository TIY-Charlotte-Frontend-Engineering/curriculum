import test from 'ava';
let closures = require('./closures');

test('testing closures.counter', test => {
    let counter = closures.counter(3);

    test.is(counter.next(), 4);
    test.is(counter.next(), 5);
    test.is(counter.next(), 6);

    let counter2 = closures.counter(1);
    test.is(counter2.next(), 2);
});

test('testing closures.total', test => {
    let total = closures.total(20);

    test.is(total.discount(0.50), 10);
    test.is(total.discount(0.20), 16);
});

test('testing closures.user', test => {
    let user = closures.user();

    test.is(user.setName('Frank Underwood'), true, 'Not returning true!');
    test.is(user.getName(), 'Frank Underwood', 'Looks like you didnt set the name');

    test.is(user.setName('M8tey'), false, 'Not returning false!');
    test.is(user.getName(), 'Frank Underwood', 'You lost the old name!');
});


test('testing closures.lives', test => {
    let lives = closures.lives(15);

    test.is(lives.left(), 15, 'Incorrect lives left @ start');
    lives.died();
    test.is(lives.left(), 14, 'Incorrect lives left after death');
    lives.died();
    lives.died();
    lives.died();
    test.is(lives.left(), 11, 'Incorrect lives left after deaths');

    lives.restart();
    test.is(lives.left(), 15, 'Incorrect lives left after restarting');
});


test('testing closures.logger', test => {
    let logger = closures.messages();

    test.is(logger.record('first message'), '[1] first message');
    test.is(logger.record('second message'), '[2] second message');
    test.is(logger.record('hello'), '[3] hello');
});

test('testing closures.multiply', test => {
    let mult = closures.multiply(6);

    test.is(mult(5), 30);
    test.is(mult(10), 60);
    test.is(mult(2), 12);

    test.is(closures.multiply(12)(12), 144);
    test.is(closures.multiply(8)(12), 96);
    test.is(closures.multiply(15)(15), 225);
}); 

test('testing closures.pocket', test => {
    let pocket = closures.pocket(89);

    test.is(pocket.coins(), 89);

    pocket.buy();
    pocket.buy();

    test.is(pocket.coins(), 69);
    test.is(pocket.trinkets(), 2);

    pocket.buy();
    test.is(pocket.coins(), 59);
    test.is(pocket.trinkets(), 3);

    pocket.sell();
    pocket.sell();

    test.is(pocket.coins(), 79);
    test.is(pocket.trinkets(), 1);
}); 