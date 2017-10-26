
/**
 * Fancy script to tell me the weather
 */

// Requirements
const req = require('request');

// Settings
const country = "London,uk";
const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "REPLACE_ME_WITH_YOUR_API_KEY";

// Build the full query string
const getString = `${url}?q=${country}&appid=${apiKey}&units=metric`;

// Make the request
req.get({uri: getString, json: true}, (error, response, body) => {

    if(response.statusCode != 200) {
        console.log(`Something bad happened: ${response.statusCode}`);
    } else {
        console.log(`${body.main.temp}C, ${body.weather[0].description}`);
    }

});

