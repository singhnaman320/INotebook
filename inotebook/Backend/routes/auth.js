const express = require('express') // import
const router = express.Router();
const User = require('../models/User')

// Create a user uning POST: "/api/auth/". doesn't require auth

router.get('/', (req, res) =>{

    console.log(req.body);

    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router