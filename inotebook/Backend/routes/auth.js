const express = require('express') // import
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Create a user uning POST: "/api/auth/". doesn't require auth

router.post('/', [
    // Validations are to be written here in routes
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 8})
], (req, res) =>{

   const result = validationResult(req)
   if(!result.isEmpty()){
    return res.status(400).json({errors: result.array()});
   }

    // const user = User(req.body);
    // user.save()
    res.send(req.body)
})

module.exports = router