
const fs = require('fs-extra');

const readAllFiles = async () => {

    let myText = "";
    try {
        myText = await fs.readFile('1.txt');
        myText += await fs.readFile('2.txt');
        myText += await fs.readFile('3.txt');
        myText += await fs.readFile('4.txt');
        myText += await fs.readFile('5.txt');
        console.log(myText);
    } catch(err) {
        console.log(`Error! ${err.message}`);
    }
    
}
readAllFiles();




