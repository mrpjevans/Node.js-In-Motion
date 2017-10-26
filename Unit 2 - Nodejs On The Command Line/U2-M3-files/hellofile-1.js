const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A default greeting
let lastGreeting = 'None';

// Check whether the file exists
fs.stat('message.txt', (err, stats) => {

	if(typeof stats != 'undefined') {

		// It does, so read in the contents
		fs.readFile('message.txt', (err, data) => {
			if (err) throw err;
			lastGreeting = 	data;

			
			
		});

	}

	console.log(`My last greeting was to ${lastGreeting}`);

	rl.question("What's your name? ", (answer) => {
	  
	  console.log(`Well hello there ${answer}`);

	  // Write the response out so we show it next time
	  fs.writeFile('message.txt', answer, (err) => {
		if (err) throw err;
		rl.close();
	  });

	});	

});

