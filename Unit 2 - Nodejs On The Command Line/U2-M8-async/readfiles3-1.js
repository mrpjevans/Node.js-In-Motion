
const fs = require('fs');

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

const readAllFiles = async () => {

    let myText = "";
    try {
        myText = await readFilePromise('1.txt');
        myText += await readFilePromise('2.txt');
        myText += await readFilePromise('3.txt');
        myText += await readFilePromise('4.txt');
        myText += await readFilePromise('5.txt');
        console.log(myText);
    } catch(err) {
        console.log(`Error! ${err.message}`);
    }
    
}

const main = async () => {
    await readAllFiles();
    console.log('Complete!');
}

main();