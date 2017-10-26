
const fs = require('fs');
let myText = "";

fs.readFile('1.txt', (err, data) => {
    if(err) throw(err);
    myText += data;
    fs.readFile('2.txt', (err, data) => {
        if(err) throw(err);
        myText += data;
        fs.readFile('3.txt', (err, data) => {
            if(err) throw(err);
            myText += data;
            fs.readFile('4.txt', (err, data) => {
                if(err) throw(err);
                myText += data;
                fs.readFile('5.txt', (err, data) => {
                    if(err) throw(err);
                    myText += data;
                    console.log(myText);
                });
            });
        });
    });
});
