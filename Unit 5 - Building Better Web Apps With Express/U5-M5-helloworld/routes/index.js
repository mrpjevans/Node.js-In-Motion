const express = require('express');
const router = express.Router();
const chuck = require('../my_modules/chuck');
const db = require('../models');
const config = require('../config/helloworld');

/* GET home page. */
router.get('/', async (req, res, next) => {

    // Get a random Chuck Norris fact
    const chuckFact = await chuck.getChuckNorrisFact();

    // Random Font
    const font = await db.Fonts.getRandomFont();

    // Translation
    const trans = await db.Translations.getRandomTranslation(config);

    // Render the template
    res.render('index', {chuck: chuckFact, font, greeting: trans});

});

module.exports = router;
