
const Sequelize = require('sequelize');

// Initialise connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.sqlite',
    operatorsAliases: false
});

// Define our Model
const User = sequelize.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    fav_pizza: Sequelize.STRING,
    space_invaders: Sequelize.INTEGER
});

// Create the table (force drops any existing table)
(async () => {

    await User.sync( {force: true} );

    await User.bulkCreate([
        { name: 'PJ', email: 'pj@company.org', fav_pizza: 'Pepperoni', space_invaders: 826488 },
        { name: 'Trish', email: 'trish@company.org', fav_pizza: 'Spicy Veg', space_invaders: 674588 },
        { name: 'Paddy', email: 'paddy@company.org', fav_pizza: 'Ham', space_invaders: 998988 },
        { name: 'Bob', email: 'bob@company.org', fav_pizza: 'Onion', space_invaders: 6577 },
        { name: 'Alice', email: 'alice@company.org', fav_pizza: 'Everything', space_invaders: 929848 }
    ]);

})();

