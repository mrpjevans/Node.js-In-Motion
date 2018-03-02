
const express = require('express');
const router = express.Router();
const chuck = require('../my_modules/chuck');
const db = require('../models');
const config = require('../config/helloworld');
const request = require('request-promise-native');

/* GET home page. */
router.get('/', async (req, res, next) => {
        
    // Get a random Chuck Norris fact
    const chuckFact = await chuck.getChuckNorrisFact();

    // Get a random font
    const font = await db.Fonts.getRandomFont();

    // Translation
    const trans = await db.Translations.getRandomTranslation(config);
    
    // Render the template
    res.render('index', {chuck: chuckFact, font, greeting: trans});

});

router.get('/weather', async (req, res, next) => {

    // Make the request
    const getString = `${config.openweathermap.url}?q=${config.openweathermap.country}&appid=${config.openweathermap.apiKey}&units=metric`;
    const weather = await request.get({uri: getString, json: true});

    res.json(weather);

});


// GET Login page
router.get('/login', (req, res, next) => {
    res.render('login', {csrf: req.csrfToken()});
});

// Attempt login
router.post('/login', async (req, res, next) => {

    const user = await db.Users.auth(req.body.username, req.body.password);

    if (user === null) {
        res.render('login', {username: req.body.username, authFailure: true, csrf: req.csrfToken()});
    } else {
        req.session.user = user.toJSON();
        res.redirect('/');
    }

});

// Log out (end our session)
router.get('/logout', (req, res, next) => {

    if(typeof req.session.user != 'undefined') {
        delete req.session.user;
    }

    res.render('logout');

});

module.exports = router;

