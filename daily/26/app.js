window.addEventListener('load', function () {
    let submitBtn = document.querySelector('#submit');

    submitBtn.addEventListener('click', function () {
        let addressBox = document.querySelector('#address');
        // Remove classes
        addressBox.classList.remove('pass');
        addressBox.classList.remove('fail');

        let addr = new RegExp('^[a-zA-Z]+[\.]?[ ]?[a-zA-Z]+, [A-Z]{2} [0-9]{5}$');
        // If the address is valid
        if (addr.test(addressBox.value)) {
            console.log('submitting!'); 
            addressBox.classList.add('pass');
        } else { // if its not
            addressBox.classList.add('fail');
        }
    });
});