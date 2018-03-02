
const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = db.Users;

// GET list of all users
router.get('/', async (req, res) => {

    let alert = {};
    if (req.query.alert) {
        alert = {type: req.query.alert};
    }

    // Get all the users
    const userList = await Users.findAll()
    res.render('users/index', {users: userList, alert: alert});

});

// GET the creation form
router.get('/create', (req, res) => {
    res.render('users/create', {fields: {}, problems: {}, csrf: req.csrfToken()});
});

// Post back to the form
router.post('/create', (req, res) => {

    // We can go ahead and create the record as all validation is done in the model
    Users.create(req.body).then(() => {

        // Send a welcome email
        Users.welcomeEmail(req.body.username);

        // It worked! Return the user to the page with a blank form
        res.render('users/create', {fields: {}, problems:{}, alert: {type: 'success'}, csrf: req.csrfToken()});
        
    }).catch((errs) => {

        // Validation failed, so report back to the user
        
        // Let's make the errors a little easier to parse in the template
        // and reduce the amount of data moving around
        let problems = {};
        errs.errors.forEach((item) => {
            problems[item.path] = item.message;
        });
       
        // Return to the page and provide info on errors
        res.render('users/create', {fields: req.body, problems: problems, alert: {type: 'validation'}, csrf: req.csrfToken()});

    });

});


// Request a specific user
router.get('/:username/', async (req, res) => {

    // Get the user and hand the data back to the form
    const user = await Users.findOne({where: {username: req.params.username}})
    res.render('users/update', {fields: user.toJSON(), problems: {}, csrf: req.csrfToken()});
        
});

// Update a user
router.post('/:username/', async (req, res) => {

    // Remove reference to the password fields if not populated
    if (req.body.password.length == 0) {
        delete req.body.password;
        delete req.body.confirm_password;
    }

    // We can go ahead and create the record as all validation is done in the model
    try {

        await Users.update(req.body, {
            where: {
                id: req.body.id
            }
        });

        // It worked! Return the user to the page with a blank form
        res.render('users/update', {fields: req.body, problems:{}, alert: {type: 'success'}, csrf: req.csrfToken()});

    } catch (errs) {

        // Validation failed, so report back to the user
            
        // Let's make the errors a little easier to parse in the template
        // and reduce the amount of data moving around
        let problems = {};
        errs.errors.forEach((item) => {
            problems[item.path] = item.message;
        });

        // Return to the page and provide info on errors
        res.render('users/update', {fields: req.body, problems: problems, alert: {type: 'validation'}, csrf: req.csrfToken()});

    }

});

// Delete a user
router.post('/:username/delete', async (req, res) => {

    if (req.session.user.username == req.body.username) {
        res.redirect('/users/?alert=self');
    } else {
        await Users.destroy({
            where: {
                username: req.body.username
            }
        });
        res.redirect('/users/?alert=deleted');
    }

});

module.exports = router;

