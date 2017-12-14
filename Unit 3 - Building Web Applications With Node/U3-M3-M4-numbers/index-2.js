
const http = require('http');
const fs = require('fs-extra');

// Create HTTP Server Object
http.createServer(async (req, res) => {
    
    if (req.method == 'GET') {

        // GET: Send the Form
        serveFile(res, 'form.html');

    } else if (req.method == 'POST') {

        // Get the submitted data
        let body = '';

        // Data has arrived
        req.on('data', (data) => {
            body += data;
        });

        // Data arrival complete - do things!
        req.on('end', () {

            // Send the results page
            serveFile(res, 'results.html');

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

    // Write out the content
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');

}
