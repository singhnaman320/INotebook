const express = require('express') // import
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Create a user uning POST: "/api/auth/createUser". doesn't require auth. No login required

router.post('/createUser', [
    // Validations are to be written here in routes
    body('name', 'Enter a valid name !').isLength({min: 3}),
    body('email', 'Enter a valid email !').isEmail(),
    body('password', 'Enter a valid password !').isLength({min: 8})
], async (req, res) =>{
    // if there are errors, return bad request and the errors
   const result = validationResult(req)
   if(!result.isEmpty()){
    return res.status(400).json({errors: result.array()});
   }

   try {
    
        // Creating a user and checking whether the user with this email already exists
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(400).json({error: "sorry.!, a user with this email already exists"})
        }
        user = await User.create({

            name : req.body.name,
            email : req.body.email,
            password : req.body.password

        })
        res.json(user)

        //.then(user => res.json(user))
        //.catch(err => {console.log(err) // If you provide duplicate data it will provide you an error 
        //res.json({result: 'Please enter a unique data'})}
        //);

        // const user = User(req.body);
        // user.save()
        // res.send(req.body)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Some error occured..!");
        // In real time we have to send this error to Logger
    }

})

module.exports = router