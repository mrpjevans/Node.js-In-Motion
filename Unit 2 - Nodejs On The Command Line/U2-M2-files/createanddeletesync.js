
const fs = require('fs');

fs.writeFileSync('message.txt', 'Node.js In Motion');
console.log('The file has been saved!');

fs.unlinkSync('message.txt');
console.log('The file has been deleted!');

