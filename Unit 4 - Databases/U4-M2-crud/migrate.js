
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.sqlite');

db.serialize(() => {

    // Create our table (dropping if it's already there)
    db.run('DROP TABLE IF EXISTS users');
    db.run('CREATE TABLE users (name TEXT, email TEXT, fav_pizza TEXT, space_invaders INT)');

    // Populate
    const stmt = db.prepare('INSERT INTO users VALUES (?,?,?,?)');
    stmt.run('PJ', 'pj@company.org', 'Pepperoni', 826488);
    stmt.run('Trish','trish@company.org', 'Spicy Veg', 674588);
    stmt.run('Paddy', 'paddy@company.org', 'Ham', 998988);
    stmt.run('Bob', 'bob@company.org', 'Onion', 6577);
    stmt.run('Alice', 'alice@company.org', 'Everything', 929848);
    
    // We're done here
    stmt.finalize();

});
 
db.close();

