module.exports = {
    valid: {
        name: ['Theordore Roosevelt', 'Jean-Patricia Levine', 'Edie Waters', 'Yvonne Mannis', 'doctor who'],
        phone: ['888 111 2222', '(888) 111 2222', '(888) 111-2222', '8881112222', '888 1112222', '8881212'],
        email: ['fred@generous.com', 'it@council.com.au', 'luke@tungstenrecords.co.uk', 'justin@biebs.org', 'james.bond@agency.gov'],
        address: ['114 Elmire St', '28 West Pennsylvania Ave', '91 East Frankline St', '1000 Palmetto Lane'],
        username: ['frankie', 'sallyw', 'beachbum41', 'synco4later', 'im4th3king1'],
        url: ['https://google.com', 'http://cnn.com', 'https://hitrecords.org/locations', 'http://ferngully.org/partners/walmart.html'],
        ipaddr: ['18.61.77.191', '8.14.91.19', '255.16.111.12', '114.250.191.1', '0.0.0.0'],
    },
    invalid: {
        name: ['e.e. cummings', 't.s. eliot', 'b', 'eli414', 'not_real', 'X'],
        phone: ['28207', '911', '191919191919', '888 111 2222 x617', '912 4456 4431'],
        email: ['nope@split url.com', 'dark knight@email.com', 'dont%drink%the%water@gmail.com', 'frank.sinatra@@best.com', 'tom.jones@expedia.@com'],
        address: ['California', 'Los Angeles, CA', '20 Copernicus Court', '211 Gr8 Highway'],
        username: ['8ball=badluck', '9lives', 'from here', 'dont*start-with-me!'],
        url: ['msn.com', '8town.com', 'ftp://bahamas.com', 'gr8l8kes@gmail.com'],
        ipaddr: ['111.7171.0.11', '1a.14.91.111', '14', '14.81,91,100'],
    },
};
