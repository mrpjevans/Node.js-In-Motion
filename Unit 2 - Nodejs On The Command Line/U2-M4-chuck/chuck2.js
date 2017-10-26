
const readline = require('readline');
const fs = require('fs');

let chuckCounter = 0;
let chuckLine = 0;
const chuckLines = 85;

if(fs.existsSync('chuckcounter.txt')) {
	chuckLine = parseInt(fs.readFileSync('chuckcounter.txt'));
	chuckLine++;
	if(chuckLine > chuckLines) chuckLine = 0;
}

// A message of the day
const rl = readline.createInterface({
    input: fs.createReadStream('chuck.txt')
});
    
rl.on('line', (line) => {
    
	if(chuckCounter == chuckLine) {
		fs.writeFileSync('chuckcounter.txt', chuckLine);
		console.log(line);
	}

	chuckCounter++;

})
