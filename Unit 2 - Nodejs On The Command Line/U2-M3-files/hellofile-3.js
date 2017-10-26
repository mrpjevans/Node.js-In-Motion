const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Check whether the file exists
fs.stat('message.txt', (err, stats) => {

	// It does, so read in the contents
	if(typeof stats != undefined) {

		fs.readFile('message.txt', (err, data) => {
			handleGreeting(data);	
		});

	} else {

		handleGreeting('None');

	}

});

function handleGreeting(lastGreeting) {

	console.log(`My last greeting was to ${lastGreeting}`);

	rl.question("What's your name? ", (answer) => {
	  
	  console.log(`Well hello there, ${answer}`);

	  // Write the response out so we show it next time
	  fs.writeFile('message.txt', answer, (err) => {
		if (err) throw err;
		rl.close();
	  });

	});

}