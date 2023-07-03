const express = require('express') // import
const router = express.Router();
const User = require('../models/User')
const { query, validationResult } = require('express-validator');

// Create a user uning POST: "/api/auth/". doesn't require auth

router.post('/', (req, res) =>{

    console.log(req.body);

    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router