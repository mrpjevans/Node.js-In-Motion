
const Sequelize = require('sequelize');
const db = require('./models');

(async () => {
    
    const translation = db.Translations;

    const transModel = await translation.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    });
    console.log(transModel.language);

})();
