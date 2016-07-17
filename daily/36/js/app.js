/* jslint esnext: true */
function getSuperheroes(success, failure) {
    var req = new XMLHttpRequest();
    req.open('get', 'http://gateway.marvel.com:80/v1/public/characters?apikey=ea904943b774d2e0bf732697141a07da&limit=20');
    req.onload = function() {
        if (req.status === 200) {
            var response = JSON.parse(req.responseText);
            success(response.data.results);
        } else {
            failure({
                code: req.status,
                message: 'didnt receive a response',
            });
        }
    };
    req.send();
}

window.addEventListener('load', function() {
    var parent = document.getElementById('hero-list');
    var superheroes = new Promise(getSuperheroes);

    // Retrieve all the heroes, and then render them into the DOM.
    superheroes.then(function(data) {
        var gen = _.template(document.getElementById('list-item-template').textContent);
        
        for (let hero of data) {
            var html = gen({
                name: hero.name,
                image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
            });
            
            var el = document.createElement('div');
            el.addEventListener('click', function() {
                console.log(hero.name);
            });
            el.innerHTML = html;            
            parent.appendChild(el);
        }
    });
});



//function announce(value) {
//    console.log(value);
//    return value;
//}
//
//function justNames(response) {    
////    return response.data.results.map((hero) => hero.name);
//    return response.data.results.map(function (entry) {
//        return entry.name;
//    });
//}
//
//function freakOut(error) {
//    console.error(`error ${error.code}: ${error.message}`);
//    // console.error('error ' + error.code + ': ' + error.message);
//}
    
window.addEventListener('load', function() {
//    var heroes = new Promise(getSuperheroes);
//    heroes
//        .then(announce)
//        .then(justNames)
//        .then(announce)
//        .catch(freakOut);
    
//    var please = new Promise(function (success, failure) {
//        if (age > 15) {
//            success({
//                oldEnough: true,
//                name: 'Benjamin',
//            });            
//        } else {
//            failure('too young');
//        }
//    });
//    
//    please.then(function (value) {
//        console.log(value);
//        return value.name;
//    }).then(function (lettuce) {
//        console.log('i cant believe its still ' + lettuce);
//    }).catch(function (error) {
//        console.error('O NO SOMETHING WENT WRONG: ' + error);
//    });
});







//function getSuperheroes(offset, callback) {
//    var req = new XMLHttpRequest();
//    req.open('get', 'http://gateway.marvel.com:80/v1/public/characters?apikey=ea904943b774d2e0bf732697141a07da&limit=20&offset=' + offset);
//    req.onload = function() {
////        console.log(JSON.parse(req.responseText));
//        callback(JSON.parse(req.responseText));
//    };
//    req.send();
//}
//
//function getSuperheroProfile(id, callback) {}
//function findAccomplices(callback) {}
//
//window.addEventListener('load', function() {
//    getSuperheroes(0, function(response) {
//        getSuperheroProfile(1, function(profile) {
//            findAccomplices(function (accomplices) {
//                getSuperheroProfile(accomplices[0], function () {
//                    
//                });
//            });
//        });
//    });
//    getSuperheroes(20, function(response) {
//        console.log(response);
//    });
//});

