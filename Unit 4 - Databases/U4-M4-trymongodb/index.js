
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/users';

(async () => {

    // Connect
    const db = await mongoClient.connect(url);
    const users = await db.collection('users');

    // Get every document
    const docs = await users.find().toArray();

    console.log(docs);

    db.close();
    
})();
