
module.exports = {
    get: function (url, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('load', function () {
            let response = JSON.parse(request.responseText);
            callback(response);
        });
        request.send(); // dont forget
    },
    post: function () {
        // todo l8r
    },
};