
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/users';

(async () => {

    const db = await mongoClient.connect(url);
    console.log('Database created');

    const users = await db.createCollection('users');
    console.log('Collection created');

    // Remove any existing documents if the collection already exists
    await users.remove();

    await users.insertMany([
        { name: 'PJ', email: 'pj@company.org', fav_pizza: 'Pepperoni', space_invaders: 826488 },
        { name: 'Trish', email: 'trish@company.org', fav_pizza: 'Spicy Veg', space_invaders: 674588 },
        { name: 'Paddy', email: 'paddy@company.org', fav_pizza: 'Ham', space_invaders: 998988 },
        { name: 'Bob', email: 'bob@company.org', fav_pizza: 'Onion', space_invaders: 6577 },
        { name: 'Alice', email: 'alice@company.org', fav_pizza: 'Everything', space_invaders: 929848 }
    ]);
    console.log('Documents created');

    db.close();
    

})();
