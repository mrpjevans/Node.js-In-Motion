
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/users';

(async () => {

    // Connect
    const db = await mongoClient.connect(url);
    const users = await db.collection('users');

    // Delete
    await users.deleteOne({ name: 'Bob' });

    console.log('Document deleted');

    db.close();

})();
