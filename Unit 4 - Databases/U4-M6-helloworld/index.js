const Sequelize = require('sequelize');
const db = require('./models');

//const users = new db.users();

(async () => {
    
    const translation = db.Translation;

    const transModel = await translation.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    });
    console.log(transModel.language);

})();
