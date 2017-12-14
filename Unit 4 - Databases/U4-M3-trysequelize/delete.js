
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

// Or using async...
(async () => {

    // Bye Bob!
    await User.destroy({
        where: {
          name: 'Bob'
        }
    });

})();

