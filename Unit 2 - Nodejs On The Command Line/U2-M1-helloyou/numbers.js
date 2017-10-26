const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Pick a number: ", (number1) => {
  
  console.log(`You chose ${number1}`);

  rl.question("Pick a second number: ", (number2) => {

  	const product = parseInt(number1) + parseInt(number2);
	console.log(`${number1} + ${number2} = ${product}`);

	rl.close();

  });

});
