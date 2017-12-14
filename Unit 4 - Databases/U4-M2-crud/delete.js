
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.sqlite');

db.run("DELETE FROM users WHERE name = 'Bob'", (err, row) => {

    if (err) {
        console.log(`Oops! ${err}`);
    } else {
        console.log('Row deleted');
    }

});

db.close();

