const express = require('express');
const router = express.Router();
const chuck = require('../my_modules/chuck');
const db = require('../models');
const config = require('../config/helloworld');

/* GET a Chuck Norris fact */
router.get('/chuck', async (req, res, next) => {

    // Get a random Chuck Norris fact
    const chuckFact = await chuck.getChuckNorrisFact();

    // Render the template
    res.json({chuck: chuckFact});

});

/* GET a Hello World */
router.get('/hello', async (req, res, next) => {

    // Translation
    const trans = await db.Translations.getRandomTranslation(config);

    // Render the template
    res.json(trans);

});


module.exports = router;
