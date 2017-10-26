
const fs = require('fs');

fs.writeFile('message.txt', 'Node.js In Motion', (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});

fs.unlink('message.txt', (err) => {
    if (err) throw err;
    console.log('The file has been deleted!');
});

