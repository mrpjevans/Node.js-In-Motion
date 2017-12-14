
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.sqlite');

db.each("SELECT rowid as id, * FROM users", (err, row) => {

      console.log(`${row.name} (${row.email}): Pizza - ${row.fav_pizza}, Space Invaders - ${row.space_invaders}`);

});

db.close();

