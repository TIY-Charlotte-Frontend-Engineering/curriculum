module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  var c = hof.counter(2);
     *  c.next(); // return 3
     */
    counter: function (start) {},

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {
        function doIt(num) {
            return val * num;
        }

        return doIt;
    },

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  var tot = hof.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {},

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  var user = hof.user();
     *  user.setName('Francis Bacon'); // return true
     *  user.getName(); // return 'Francis Bacon'
     *  user.setName('123 hi'); // return false
     *  user.getName(); // return 'Francis Bacon'
     */
    user: function () {},

    /**
     * Create a color object that's got six different properties: incrRed(amount), 
     * incrGreen(amount), and incrBlue(amount) - all of which change the R, G, or B
     * value by the specified quantity (could be negative).
     *
     * There should also be a red(), green(), and blue() function that return the current
     * value for that color channel.
     *
     * You can't have a color value less than zero or greater than 255.
     *
     *  var color = hof.color(150, 200, 18);
     *  color.incrRed(12);
     *  color.incrGreen(30);
     *  color.incrBlue(-9);
     *  console.log(color.red(), color.green(), color.blue()); // 162, 230, 9
     */
    color: function (r, g, b) {
        return {
            incrRed: function (red) {
                r = r + red;

                if (r < 0) {
                    r = 0;
                } else if (r > 255) {
                    r = 255;
                }
            },
            incrGreen: function (green) {
                g = g + green;

                if (g < 0) {
                    g = 0;
                } else if (g > 255) {
                    g = 255;
                }
            },
            incrBlue: function (blue) {
                b = b + blue;

                if (b < 0) {
                    b = 0;
                } else if (b > 255) {
                    b = 255;
                }
            },
            red: function () {
                return r;
            },
            green: function () {
                return g;
            },
            blue: function () {
                return b;
            }
        };
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  var lives = hof.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) {},

    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  var logger = hof.messages();
     *  var msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
        var count = 0;

        var obj = {
            record: function (msg) {
                count = count + 1;

                // increase logger variable by one before returning the message
                return '[' + count + '] ' + msg;
            }
        };

        return obj;
    },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  var pocket = hof.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
        var coins = start;
        var trinkets = 0;

        return {
            buy: function () {
                if (coins >= 10) {
                    coins = coins - 10;
                    trinkets = trinkets + 1;
                }
            },
            sell: function () {
                if (trinkets >= 1) {
                    coins = coins + 5;
                    trinkets = trinkets - 1;
                }
            },
            coins: function () {
                return coins;
            },
            trinkets: function () {
                return trinkets;
            },
        };
    },
};