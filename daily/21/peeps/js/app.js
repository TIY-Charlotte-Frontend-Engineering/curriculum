var validate = require('./validate');

function error(element) {
    element.classList.add('error');
}

function clear(element) {
    element.classList.remove('error');
}

window.addEventListener('load', function () {
    document.getElementById('first-name').addEventListener('blur', function () {
        if (!validate.name(this)) {
            error(this);
        } else {
            clear(this);
        }
    });

    document.getElementById('phone-number').addEventListener('blur', function () {
        if (!validate.phone(this)) {
            error(this);
        } else {
            clear(this);
        }
    });
});