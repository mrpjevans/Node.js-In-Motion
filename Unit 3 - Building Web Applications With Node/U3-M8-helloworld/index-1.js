
const express = require('express');
const app = express();

// Handle every GET
app.get('/', (req, res) => {

    // Render the template
    res.render(__dirname + '/index.pug');
    
});

// Start the server
app.listen(8080, (err) => {
    console.log('Express running at http://127.0.0.1:8080/');
});

