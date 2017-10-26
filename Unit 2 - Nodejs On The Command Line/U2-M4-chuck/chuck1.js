
const readline = require('readline');
const fs = require('fs');

// A message of the day
const rl = readline.createInterface({
    input: fs.createReadStream('chuck.txt')
});
    
rl.on('line', (line) => {
    console.log(line);
})
