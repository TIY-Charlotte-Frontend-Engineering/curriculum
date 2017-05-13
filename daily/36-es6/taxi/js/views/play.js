const View = require('ampersand-view');

module.exports = View.extend({
    initialize() {
        this.model.on('change', this.highlight, this);
    },

    template: document.querySelector('#tpl-play').innerHTML,

    events: {
        'click #up': 'up',
        'click #down': 'down',
        'click #left': 'left',
        'click #right': 'right',
    },

    bindings: {
        'model.car_x': '.taxi_x',
        'model.pass_y': '.taxi_y',
        'model.gas': '.gas',
    },

    /**
     * Highlight updates the boxes that get colored on the screen. I start off by
     * removing all colors, then adding them back. The passenger is only displayed 
     * when they haven't been picked up yet.
     */
    highlight() {
        const taxi = this.el.querySelector('.taxi');
        const pass = this.el.querySelector('.pass');
        const drop = this.el.querySelector('.drop');

        // Remove all classes.
        if (taxi !== null) {
            taxi.classList.remove('taxi');
        }

        if (pass !== null) {
            pass.classList.remove('pass');
        }

        if (drop !== null) {
            drop.classList.remove('drop');
        }

        // Re-apply classes
        const taxi_el = this.el.querySelectorAll('div.col')[this.model.car_y * 20 + this.model.car_x];
        taxi_el.classList.add('taxi');

        if (this.model.passenger_waiting) {
            const pass_el = this.el.querySelectorAll('div.col')[this.model.pass_y * 20 + this.model.pass_x];
            pass_el.classList.add('pass');
        }

        const drop_el = this.el.querySelectorAll('div.col')[this.model.dest_y * 20 + this.model.dest_x];
        drop_el.classList.add('drop');
    },

    up() {
        this.model.moveUp();

        if (this.model.gas === 0) {
            this.router.navigate('end');
        }
    },

    down() {
        this.model.moveDown();

        if (this.model.gas === 0) {
            this.router.navigate('end');
        }
    },

    left() {
        this.model.moveLeft();
        
        if (this.model.gas === 0) {
            this.router.navigate('end');
        }
    },

    right() {
        this.model.moveRight();
        
        if (this.model.gas === 0) {
            this.router.navigate('end');
        }
    },

    /* Instead of manually creating 400 elements, loop. */
    render() {
        this.renderWithTemplate();
        const grid = this.el.querySelector('#grid');

        // create a 20x20 grid
        for (let y = 0; y < 20; y++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let x = 0; x < 20; x++) {
                const col = document.createElement('div');
                col.classList.add('col');

                row.appendChild(col);
            }

            grid.appendChild(row);
        }

        this.highlight(); // highlight once after the grid is rendered
    }
});