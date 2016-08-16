// Add the two numbers from the DOM
function addition() {

}

// Run some code when the page loads.
window.addEventListener('load', function () {
    let first = document.getElementById('firstVal');
    let second = document.getElementById('secondVal');
    let answer = document.getElementById('answer');

    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', function () {
        let sum = parseInt(first.value) + parseInt(second.value);
        answer.textContent = 'Answer: ' + sum;
    });
});