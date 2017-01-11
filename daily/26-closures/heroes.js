
let H = (function () {
    let heroes = [
        'Superman',
        'Batman',
        'Superwoman',
        'Catwoman',
    ];

    return {
        count: function () {
            return heroes.length;
        },
        add: function (name) {
            heroes.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
        },
        announce: function () {
            for (let i = 0; i < heroes.length; i++) {
                console.log(heroes[i]);
            }
        },
    };
}());


H.add('mickey');
H.add('IRONMAN');
H.announce();