
const readline = require('readline');
const fs = require('fs');

exports.getChuckNorrisFact = () => {

    return new Promise((resolve) => {

    	// A message of the day
    	let chuckCounter = 0;

    	const chuckLine = Math.floor(Math.random() * (86)) + 1;

    	const rl = readline.createInterface({
    	    input: fs.createReadStream(__dirname + '/chuck.txt')
    	});

    	rl.on('line', (line) => {

    	    if(chuckCounter == chuckLine) {
    	        resolve(line);
    	    }

    	    chuckCounter++;

    	})

    });

}
