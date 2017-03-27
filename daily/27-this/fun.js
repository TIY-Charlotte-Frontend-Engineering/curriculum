/**
 * Function:
 *  - Name: name
 *  - Scope: global
 *  - Inputs: one, string
 *  - Output: string
 */
function name(first) {
    let caps = first.toUpperCase();

    /**
     * Function:
     *  - Name: capitalize
     *  - Scope: name
     *  - Inputs: one, string
     *  - Output: string
     */
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return capitalize(first);
}

/* Name: anon, Scope: global, Inputs: one string, Output: number */
let wordify = function(word) {
    if (word.length > 3) {
        /* Name: lengthy, Scope: if?, Inputs: one string, Outputs: number */
        function lengthy(word) {
            return word.length;
        }

        return lengthy(word);
    } else {
        return word.length + 4;
    }
};
wordify('hello');

function crunchNumbers() {
    let x = 15 * 215;

    return 2 + 1;
}

let dinner = {
    eat: function chomp() {
        console.log('eating ' + this.amount + ' food');
    },
    amount: 50,
};

// dinner.eat();
// chomp();    // 'this' is different
// eat();      // no-go

// let food = dinner.eat;
// food();

/**
 * Return an object that has an 'add' function. You can use this to 
 * add users to the userlist.
 * 
 * Pt 2: lukes secret upgrade idea
 */
function userlist() {
    // where the peeps are stored
    let peeps = [];

    let users = {
        // add someone to the array
        add: function (name) {
            peeps.push(name);
        },
        // console.log everyone's name
        announce: function () {
            for (let i = 0; i < peeps.length; i++) {
                console.log(peeps[i]);
            }
        },
    };

    return users;
} // end of userlist func

let list = userlist();
list.add('Martha');
list.announce();