
const fs = require('fs');
let myText = "";

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


readFilePromise('1.txt').then((data) => {
    myText = data;
    return readFilePromise('2.txt');
}).then((data) => {
    myText += data;
    return readFilePromise('3.txt');
}).then((data) => {
    myText += data;
    return readFilePromise('4.txt');
}).then((data) => {
    myText += data;
    return readFilePromise('5.txt');
}).then((data) => {
    myText += data;
    console.log(myText);
}).catch((err) => {
    console.log(`Error! ${err}`);
});






