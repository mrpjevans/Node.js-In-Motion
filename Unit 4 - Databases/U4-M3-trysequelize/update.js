
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

(async () => {

    // I Win!
    await User.update({
        space_invaders: 9999999
    }, {
        where: {
          name: 'PJ'
        }
    });

})();

