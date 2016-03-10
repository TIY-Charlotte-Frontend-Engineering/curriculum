function total(prices) {
    var amount = 0;

    for (var current = 0; current < prices.length; current++) {
        amount = amount + prices[current];
        // amount += prices[current];
    }

    return amount;
}

function tax(subtotal) {
    return subtotal * 0.07;
}

function discount(prices, method) {
    // if an item's price is > 5.00, discount of one dollar
    for (var i = 0; i < prices.length; i++) {
        prices[i] = method(prices[i]);
        //        if (prices[i] > 5) {
        //            prices[i] = prices[i] - 1;
        //        }
    }

    return prices;
}

function fiveDollarSpecial(cost) {
    if (cost > 5) {
        return cost - 1;
    } else {
        return cost;
    }
}

function threeDollarWhammy(cost) {
    return 3;
}

var costs = [4.99, 1.99, 7.54, 3.69];
costs = discount(costs, threeDollarWhammy);
console.log('Current costs: ' + costs);

var subtotal = total(costs);
console.log('Subtotal: ' + subtotal);

var taxOwed = tax(subtotal);
console.log('Tax: ' + taxOwed);

var grandTotal = subtotal + taxOwed;
console.log('Grand total: ' + grandTotal);