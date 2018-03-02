const Sequelize = require('sequelize');
const db = require('./models');

(async () => {
    
    const cheese = db.cheese;
    console.log(await cheese.uniqueCountries());
    
})();
