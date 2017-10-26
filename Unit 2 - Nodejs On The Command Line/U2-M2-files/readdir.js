
const fs = require('fs');

fs.readdir(__dirname, (err, files) => {

	console.log(files);

});