// 1. What data we want
//      name, address, and photo of random person
// 2. When we want it
//      on page load
// 3. What we want to do with it 
//      render it in the dom

window.addEventListener('load', function () {
    getAdmirablePerson();
});

function getAdmirablePerson() {
    // Every AJAX request has a few steps
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/'); // setup where we want the request to go
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText); // responseText is not made up; you have to use this word
        console.log(response.results[0].name.first);
    }); // when we get a response from the backend
    request.send(); // makes the web request
}
