window.addEventListener('load', function () {
    var firstName = document.getElementById('first-name');
    firstName.addEventListener('blur', function () {
        console.log('blurring firstname');
        var text = firstName.value;

        for (var i = 0; i < text.length; i++) {
            // check to see if each char is a valid char
        }
    });
    
    // 888 111 2222
    // (888) 111 2222
    // (888) 111-2222
    // 8881112222
    // 888 1112222
});