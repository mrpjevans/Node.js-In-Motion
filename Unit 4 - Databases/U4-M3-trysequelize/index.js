
const Sequelize = require('sequelize');

// Initialise connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.sqlite',
    operatorsAliases: false,
    logging: false
});

// Define our Model
const User = sequelize.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    fav_pizza: Sequelize.STRING,
    space_invaders: Sequelize.INTEGER
});

// Get some data
(async () => {
    const rows = await User.findAll();
    rows.forEach((row) => {
        console.log(`${row.name} (${row.email}): Pizza - ${row.fav_pizza}, Space Invaders - ${row.space_invaders}`);
    });
})();


