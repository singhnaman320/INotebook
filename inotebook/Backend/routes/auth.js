const express = require('express') // import
const router = express.Router();
const User = require('../models/User')
const { query, validationResult } = require('express-validator');

// Create a user uning POST: "/api/auth/". doesn't require auth

router.post('/', [
    // Validations are to be written here in routes
    query('name').isLength({min: 5}),
    query('email').isEmail(),
    query('password').isLength({min: 8})
], (req, res) =>{

    console.log(req.body);

    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router