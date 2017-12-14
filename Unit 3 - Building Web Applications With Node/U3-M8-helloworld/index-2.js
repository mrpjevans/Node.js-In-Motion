const express = require('express');
const chuck = require('./chuck');
const app = express();

// Handle every GET
app.get('/', (req, res) => {

    // Get a random Chuck Norris fact
    chuck.getChuckNorrisFact((chuckFact) => {

        // Render the template
        res.render(__dirname + '/index.pug', {'chuck': chuckFact});
    
    });

});

// Serve the stylesheet
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

// Start the server
app.listen(8080, (err) => {
    console.log('Express running at http://127.0.0.1:8080/');
});
