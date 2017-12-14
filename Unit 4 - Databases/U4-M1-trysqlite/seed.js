
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('example.sqlite');

db.serialize(() => {

    db.run("CREATE TABLE cheeses (name TEXT)");

    const stmt = db.prepare("INSERT INTO cheeses VALUES (?)");

    stmt.run("Cheddar");
    stmt.run("Wensleydale");
    stmt.run("Red Leicester");
    stmt.run("Stilton");
    stmt.run("Yarg");
    stmt.run("Oxford Blue");
    stmt.run("Brie");
    stmt.run("Cheshire");

    stmt.finalize();
     
    db.each("SELECT rowid AS id, name FROM cheeses", (err, row) => {
      console.log(row.id + ": " + row.name);
    });

});
 
db.close();

