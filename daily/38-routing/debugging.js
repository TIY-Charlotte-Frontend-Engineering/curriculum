(function () {
    console.log('hello! starting now');

    function tallestMountain(mountains) {
        let current = 0;

        for (let i = 0; i < mountains.length; i++) {
            if (mountains[i] > current) {
                current = mountains[i]
            }
        }

        return current;
    }

    const tallest = tallestMountain([5, 6, 8, 3, 2]);

    const eroded = tallest - 1;

    console.log('go go gadget erosion');
    console.log(eroded);

    window.addEventListener('load', function () {
        document.querySelector('h1').addEventListener('click', function () {
            console.log('GOOD DAY')
        });
    });
} ())
