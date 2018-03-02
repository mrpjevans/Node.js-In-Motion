const express = require('express');
const router = express.Router();
const chuck = require('../my_modules/chuck');

/* GET home page. */
router.get('/', async (req, res, next) => {

    // Get a random Chuck Norris fact
    const chuckFact = await chuck.getChuckNorrisFact();

    // Render the template
    res.render('index', {chuck: chuckFact});

});

module.exports = router;
