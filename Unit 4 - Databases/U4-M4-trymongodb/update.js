
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/users';

(async () => {

    // Connect
    const db = await mongoClient.connect(url);
    const users = await db.collection('users');

    // Update
    await users.updateOne(
        { name: 'PJ' },
        {'space_invaders': 9999999}
    );

})();

