const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle every GET
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

// Handle every POST
app.post('/', (req, res) => {

    // Create some content to respond with
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const results = {
        num1: num1,
        num2: num2,
        add: num1 + num2,
        sub: num1 - num2,
        div: num1 / num2,
        mul: num1 * num2
    };
    
    res.render(__dirname + '/index.ejs', results);

});

// Start the server
app.listen(8080, (err) => {
    console.log('Express running at http://127.0.0.1:8080/');
});