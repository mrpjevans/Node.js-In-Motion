
/**
 * Fancy script to tell me the weather
 */

// Requirements
const http = require('http');

// Settings
const country = "London,uk";
const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "REPLACE_ME_WITH_YOUR_API_KEY";

// Build the full query string
const getString = `${url}?q=${country}&appid=${apiKey}&units=metric`;

// Make the request
http.get(getString, (res) => {

    // Will contain the complete response
    let body = "";

    // Data incoming event listener
    res.on('data', (data) => {
        body += data;
    });

    // Data complete
    res.on('end', () => {

        // Convert to JSON for easier parsing
        const parsed = JSON.parse(body);

        // Check the COD value
        if(parsed.cod != 200) {
            console.log(`Error retrieving weather data: ${parsed.cod}`);
        } else {
            console.log(`${parsed.main.temp}C, ${parsed.weather[0].description}`);
        }

    });

}).on('error', (e) => {
    console.log(`Error: ${e.message}`);
});
