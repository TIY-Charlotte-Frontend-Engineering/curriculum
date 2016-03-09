window.addEventListener('load', function () {
    // Step 1: get the 'Calculate' button and add a click event
    //      listener.
    // Step 2: In that listener, get num1 (as integer) and num2
    //      (also as integer).
    // Step 3: Determine what operation they want me to do with
    //      them (add, sub, mul, div).
    // Step 4: Do that operation and then update the DOM with
    //      the result.
    var button = document.getElementById('calc');
    button.addEventListener('click', function () {
        var box1 = document.getElementById('first');
        var box2 = document.getElementById('second');

        var num1 = parseInt(box1.value);
        var num2 = parseInt(box2.value);
        var result = 0;

        // Operations
        if (document.getElementById('addition').checked) {
            // i need to add
            result = num1 + num2;
        }
        if (document.getElementById('subtraction').checked) {
            // i need to subtract
            result = num1 - num2;
        }
        if (document.getElementById('multiplication').checked) {
            // i need to multiply
            result = num1 * num2;
        }
        if (document.getElementById('division').checked) {
            // i need to divide
            result = num1 / num2;
        }

        var answer = document.getElementById('answer');
        answer.textContent = result;
        // document.getElementById('answer').textContent = num1 + num2;
    });
});