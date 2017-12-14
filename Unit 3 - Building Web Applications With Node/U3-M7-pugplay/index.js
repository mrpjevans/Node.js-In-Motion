
const express = require('express');
const app = express();

// Handle every GET
app.get('*', (req, res) => {

    let myTemplate = req.url;
    if(myTemplate == '/') {
        myTemplate = 'index';
    }

    const data = {
        theTime: new Date(),
        aList: ['One', 'Two', 'Three', 'Four']
    };

    console.log(`Serving ${myTemplate}`);

    res.render(`${__dirname}/templates/${myTemplate}.pug`, data );

});

// Start the server
app.listen(8080, (err) => {
    console.log('Express running at http://127.0.0.1:8080/');
});
