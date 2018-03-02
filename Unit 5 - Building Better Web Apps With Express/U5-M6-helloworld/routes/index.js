
const express = require('express');
const router = express.Router();
const chuck = require('../my_modules/chuck');
const Sequelize = require('sequelize');
const db = require('../models');
const config = require('../config/helloworld');
const request = require('request-promise-native');

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

/* GET weather */
router.get('/weather', async (req, res, next) => {

    // Build the full query string    
    const getString = `${config.openweathermap.url}?q=${config.openweathermap.country}&appid=${config.openweathermap.apiKey}&units=metric`;

    // Make the request
    const weather = await request.get({uri: getString, json: true});
    res.json(weather);

});

module.exports = router;
