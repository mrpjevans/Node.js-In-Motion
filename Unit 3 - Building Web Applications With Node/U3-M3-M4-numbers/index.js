
const http = require('http');
const fs = require('fs-extra');
var qs = require('querystring');

// Create HTTP Server Object
http.createServer(async (req, res) => {
    
    if (req.method == 'GET') {

        // GET: Send the Form
        serveFile(res, 'form.html');

    } else if (req.method == 'POST') {

        // Get the submitted data
        var body = '';

        // Data has arrived
        req.on('data', function (data) {
            body += data;
        });

        // Data arrival complete - do things!
        req.on('end', function () {

            // Parse the body into usable POST data
            const query = qs.parse(body);

            // Create some content to respond with
            const num1 = parseInt(query.num1);
            const num2 = parseInt(query.num2);
            const results = {
                num1: num1,
                num2: num2,
                add: num1 + num2,
                sub: num1 - num2,
                div: num1 / num2,
                mul: num1 * num2
            };
            
            // Send the results page
            serveFile(res, 'results.html', results);

        });
        
    }
    
}).listen(8080, (err) => { // Start listening
    console.log('Server running at http://127.0.0.1:8080/');
});

// Serve a static file
async function serveFile(res, fileName, keyPairs) {

    // Get the file
    console.log(`Serving ${fileName}`);
    let content = await fs.readFile(fileName, 'utf-8');

    // Fill in the blanks (if any)
    if (typeof keyPairs != 'undefined') {
        
        // Get a list of keys
        const keys = Object.keys(keyPairs)

        // For each key
        for (key in keys) {

            // Get the key name
            const keyName = keys[key];

            // Replace all instances of the key name with the key value
            content = content.replace(new RegExp(`{${keyName}}`, 'g'), keyPairs[keyName]);

        }
    }

    // Write out the content
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');

}
